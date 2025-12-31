const { GoogleGenerativeAI } = require('@google/generative-ai');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { mode, params, context } = req.body;

    let prompt = '';
    switch (mode) {
        case 'character':
            prompt = `Generate 10-15 fantasy names for a character with the following details:
      - Gender: ${params.gender}
      - Race: ${params.race}
      - Profession: ${params.profession}
      - Social Class: ${params.socialClass}
      - Personality: ${params.personality}
      - Tone: ${params.tone}
      - Additional Context: ${context || 'None provided'}
      Each name should feel unique and fitting for a fantasy world called Neoantica. 
      RETURN ONLY A RAW JSON ARRAY OF STRINGS. DO NOT include "json" formatting or backticks. Example: ["Name1", "Name2"]`;
            break;
        case 'lore':
            prompt = `Write an immersive 2–3 sentence high-fantasy backstory for a character named "${params.name}".

Inputs:
- Gender: ${params.gender}
- Race: ${params.race}
- Profession: ${params.profession}
- Social Class: ${params.socialClass}
- Personality: ${params.personality}
- Tone: ${params.tone}

Requirements:
- Sentence 1: establish a specific origin or reputation (include 1 unique proper noun: a place, order, relic, or title).
- Sentence 2: reveal a defining twist (secret, debt, curse, vow, betrayal, prophecy, or crime) that fits the Tone.
- Sentence 3 (optional): end with a present-tense hook: what they want right now, and what stands in their way.

Style rules:
- Evocative, grounded details (one sensory image or concrete object).
- No modern slang, no game mechanics, no bullet points, no headings.
- Avoid cliché openers like "born in a small village…".
- If any input is "Any/Unknown", subtly omit it and infer something fitting.
- Make it feel distinct: avoid using the most common fantasy nouns (e.g., "tavern", "bandits", "chosen one") unless you give them a unique twist.
- Write in third-person past tense, with the final hook in present tense.
- Do not change or "correct" the name "${params.name}" and do not add quotation marks around it.

RETURN ONLY the plain text backstory.`;
            break;
        case 'world-lore':
            prompt = `Generate an evocative 2–3 sentence lore snippet for a fantasy world named "${params.name}".

Inputs: 
- Location Type: ${params.locationType}
- Geography: ${params.geography}
- Climate: ${params.climate}
- Inhabitants: ${params.inhabitants}
- Tone: ${params.tone}

Requirements:
- Sentence 1: a striking establishing image (geography + atmosphere) with one unique proper noun (region, landmark, era, or phenomenon).
- Sentence 2: the world's defining tension (war, curse, collapse, divine feud, forbidden magic, rising empire).
- Sentence 3 (optional): a hook that suggests what could happen next.

Style rules:
- No modern terms, no bullet points, no headings.
- If an input is unknown, infer something consistent.
- Make it feel distinct: avoid using the most common fantasy nouns unless you give them a unique twist.
- Do not change or "correct" the name "${params.name}" and do not add quotation marks around it.

RETURN ONLY plain text.`;
            break;
        case 'faction-lore':
            prompt = `Generate a 2–3 sentence lore snippet for a fantasy faction named "${params.name}".

Inputs:
- Faction Type: ${params.factionType}
- Alignment: ${params.alignment}
- Size: ${params.size}
- Influence: ${params.influence}
- Tone: ${params.tone}

Requirements:
- Sentence 1: who they are + a signature symbol/trait (banner, creed, weapon, rite, uniform).
- Sentence 2: what they want and what they're willing to do (include a rival, threat, or price).
- Sentence 3 (optional): a hook: why they matter right now.

Style rules:
- No bullet points, no headings, no game mechanics.
- Make it feel distinct: avoid using the most common fantasy nouns unless you give them a unique twist.
- Do not change or "correct" the name "${params.name}" and do not add quotation marks around it.

RETURN ONLY plain text.`;
            break;
        case 'religion-lore':
            prompt = `Generate a 2–3 sentence lore snippet for a fantasy religion named "${params.name}".

Inputs:
- Religion Type: ${params.type}
- Alignment: ${params.alignment}
- Cultural Influence: ${params.culture}
- Tone: ${params.tone}

Requirements:
- Sentence 1: what they worship/believe + the emotional flavor of the faith.
- Sentence 2: a distinctive practice and a cost (taboo, sacrifice, conflict with outsiders, hidden truth).
- Sentence 3 (optional): a hook: a schism, prophecy, heresy, or miracle stirring now.

Style rules:
- No bullet points, no headings, no modern slang.
- Make it feel distinct: avoid using the most common fantasy nouns unless you give them a unique twist.
- Do not change or "correct" the name "${params.name}" and do not add quotation marks around it.

RETURN ONLY plain text.`;
            break;
        default:
            if (req.body.prompt) {
                prompt = req.body.prompt;
            } else {
                return res.status(400).json({ error: 'Invalid mode or missing prompt' });
            }
    }

    try {
        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
        }

        // Use v1 endpoint with gemini-2.0-flash (confirmed available via /api/models)
        const apiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent';

        const response = await fetch(`${apiUrl}?key=${process.env.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            return res.status(response.status).json({
                error: `Gemini API error: ${response.status}`,
                details: errorData
            });
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';


        // Check if this is any lore mode and return as lore object
        if (mode === 'lore' || mode === 'world-lore' || mode === 'faction-lore' || mode === 'religion-lore') {
            return res.json({ lore: text.trim() });
        }

        let names;
        try {
            const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
            names = JSON.parse(cleanText);
        } catch (parseError) {
            names = text.split('\n')
                .map(line => line.replace(/^\d+[\.\)]\s*/, '').trim())
                .filter(line => line.length > 0 && !line.includes('[') && !line.includes(']'));
            if (names.length === 0) names = ['Error parsing AI response'];
        }

        return res.json({ names });
    } catch (error) {
        console.error("Gemini API Error:", error);
        console.error("Error stack:", error.stack);

        return res.status(500).json({
            error: `Failed to generate: ${error.message}`,
            type: error.constructor.name,
            details: error.toString()
        });
    }
};

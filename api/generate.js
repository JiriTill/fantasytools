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
            prompt = `Generate a short, immersive 2-3 sentence backstory for a fantasy character named "${params.name}".
      - Gender: ${params.gender}
      - Race: ${params.race}
      - Profession: ${params.profession}
      - Social Class: ${params.socialClass}
      - Personality: ${params.personality || 'Unknown'}
      - Tone: ${params.tone}
      The backstory should be evocative and fit a high fantasy setting.
      RETURN ONLY THE PLAIN TEXT BACKSTORY.`;
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

        // Use REST API directly instead of SDK to use v1 endpoint
        const apiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

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
            return res.status(500).json({
                error: `Gemini API error: ${response.status}`,
                details: errorData
            });
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        if (mode === 'lore') {
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

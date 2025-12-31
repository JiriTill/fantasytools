const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini
// Ensure GEMINI_API_KEY is set in your .env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/', async (req, res) => {
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
      // If prompt is passed directly (legacy support)
      if (req.body.prompt) {
        prompt = req.body.prompt;
      } else {
        return res.status(400).json({ error: 'Invalid mode or missing prompt' });
      }
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // If mode is 'lore', return pure text object
    if (mode === 'lore') {
      res.json({ lore: text.trim() });
      return;
    }

    let names;
    try {
      // Clean up markdown code blocks if Gemini mimics them
      const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      names = JSON.parse(cleanText);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      // Fallback: splitting by lines if not JSON
      names = text.split('\n')
        .map(line => line.replace(/^\d+[\.\)]\s*/, '').trim())
        .filter(line => line.length > 0 && !line.includes('[') && !line.includes(']'));
      if (names.length === 0) names = ['Error parsing AI response'];
    }

    // BACKWARD COMPATIBILITY: default to returning object
    res.json({ names });
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Detect 429 error and return it to the frontend
    const isQuotaExceeded = error.message?.includes('429') || error.response?.status === 429;
    res.status(isQuotaExceeded ? 429 : 500).json({
      error: `Failed to generate names: ${error.message}`,
      details: error.response ? error.response.data : null
    });
  }
});

module.exports = router;

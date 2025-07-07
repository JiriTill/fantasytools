const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
      Each name should feel unique and fitting for a fantasy world called Neoantica. Return the names as a JSON array.`;
      break;
    default:
      return res.status(400).json({ error: 'Invalid mode' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4', // Use gpt-4 or gpt-3.5-turbo based on availability
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    });

    let names;
    try {
      names = JSON.parse(response.choices[0].message.content);
    } catch (parseError) {
      names = ['Error parsing AI response'];
    }
    res.json(names);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate names' });
  }
});

module.exports = router;

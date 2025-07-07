const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/', async (req, res) => {
  const { mode, params, context } = req.body;

  let prompt = '';
  switch (mode) {
    case 'character':
      prompt = `You are a world-class fantasy name crafter for novels, games, and immersive worldbuilding. Generate 10 fantasy names for a character with the following details:
      - Gender: ${params.gender}
      - Race: ${params.race}
      - Profession: ${params.profession}
      - Social Class: ${params.socialClass}
      - Personality: ${params.personality}
      - Tone: ${params.tone}
      - Additional Context: ${context || 'None provided'}
      The name must match the race, culture, and tone of the character, while reflecting their background, status, and role in the world.

      Rules:
        - Prioritize phonetic consistency with the race and cultural tone (e.g., elves sound melodic, dwarves sound rugged, orcs sound guttural).
        - Include only the name(s) unless told otherwise.
        - Do not copy names from known franchises (no Tolkien, D&D, or Elder Scrolls names).
        - Never be silly or random—names must feel natural in a fantasy world, not made-up nonsense.
        - Use linguistic intuition: names can be inspired by real-world language roots (e.g., Old Norse, Gaelic, Arabic) depending on the culture.
        - If the user requests a full name, consider including a clan name, house, or title if culturally appropriate.
        - Avoid generic name templates. Instead, craft names that reflect the character’s story and world.
      Return the names as a JSON array.`;
      break;
    case 'faction':
      prompt = `Generate 10-15 fantasy faction names for a world with the following details:
      - Tone: ${params.tone}
      - Additional Context: ${context || 'None provided'}
      Return the names as a JSON array.`;
      break;
    // Add similar cases for religion, worldbuilding, misc, dynamic
    default:
      return res.status(400).json({ error: 'Invalid mode' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4', // Use gpt-4 or gpt-3.5-turbo based on availability
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    });

    const names = JSON.parse(response.choices[0].message.content);
    res.json(names);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate names' });
  }
});

module.exports = router;

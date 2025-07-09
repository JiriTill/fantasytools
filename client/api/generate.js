export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { type, race, culture, keywords } = req.body;

  const { prompt } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: 'Missing prompt in request body.' });
      }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4', // Or 'gpt-3.5-turbo' for faster, cheaper results
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    const raw = data.choices[0].message.content;
    const names = raw
      .split('\n')
      .map((line) => line.replace(/^\d+[\).\s]+/, '').trim())
      .filter(Boolean);

    res.status(200).json({ names });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to generate names' });
  }
}


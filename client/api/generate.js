// generate.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Missing prompt in request body.' });

  try {
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'; // pick a modern default
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8,
      }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      // Pass through OpenAI’s message so you see the real cause in logs/UI
      const msg = data?.error?.message || `OpenAI error ${resp.status}`;
      console.error('OpenAI error:', data);
      return res.status(502).json({ error: msg });
    }

    const raw =
      data?.choices?.[0]?.message?.content ??
      data?.choices?.[0]?.text ?? ''; // fallback for instruct-style models

    if (!raw) return res.status(502).json({ error: 'No content returned by OpenAI' });

    const names = raw
      .split('\n')
      .map((line) => line.replace(/^\d+[\).\s]+/, '').trim())
      .filter(Boolean);

    return res.status(200).json({ names });
  } catch (err) {
    console.error('OpenAI Error:', err);
    return res.status(500).json({ error: 'Failed to generate names' });
  }
}

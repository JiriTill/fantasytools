const { GoogleGenerativeAI } = require('@google/generative-ai');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: 'No API key configured' });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const models = await genAI.listModels();

        return res.json({
            models: models.map(m => ({
                name: m.name,
                displayName: m.displayName,
                supportedMethods: m.supportedGenerationMethods
            }))
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: error.toString()
        });
    }
};

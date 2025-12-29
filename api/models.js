const { GoogleGenerativeAI } = require('@google/generative-ai');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: 'No API key configured' });
        }

        // Try v1 endpoint
        const v1Response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${process.env.GEMINI_API_KEY}`);

        if (v1Response.ok) {
            const v1Data = await v1Response.json();
            return res.json({
                version: 'v1',
                models: v1Data.models?.map(m => m.name) || []
            });
        }

        // Try v1beta endpoint
        const v1betaResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);

        if (v1betaResponse.ok) {
            const v1betaData = await v1betaResponse.json();
            return res.json({
                version: 'v1beta',
                models: v1betaData.models?.map(m => m.name) || []
            });
        }

        return res.status(500).json({
            error: 'Could not fetch models from either v1 or v1beta',
            v1Status: v1Response.status,
            v1betaStatus: v1betaResponse.status
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: error.toString()
        });
    }
};

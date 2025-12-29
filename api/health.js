module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: {
            hasApiKey: !!process.env.GEMINI_API_KEY
        }
    });
};

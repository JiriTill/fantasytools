const express = require('express');
const cors = require('cors');
const generateRoutes = require('./routes/generate');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/generate', generateRoutes);

const PORT = process.env.PORT || 5000;

// Only listen if not running on Vercel (Vercel exports the app)
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;

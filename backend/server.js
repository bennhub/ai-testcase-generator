const express = require('express');
const bodyParser = require('body-parser');
const { generateTestCases } = require('./ai_module');
const path = require('path'); // Node.js module to work with file and directory paths

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to handle CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoint to generate test cases
app.post('/generate-testcase', (req, res) => {
    const { requirement } = req.body;
    const testcases = generateTestCases(requirement);
    res.json({ testcases });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

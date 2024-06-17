const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

async function generateTestCases(requirement) {
    const apiKey = process.env.API_KEY; // Access API key from environment variable
    const headers = {
        'Referer': 'http://localhost:3000/',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    };

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci/completions',
            {
                prompt: `Generate test cases for: "${requirement}"`,
                max_tokens: 100,
                temperature: 0.7,
                stop: ['\n']
            },
            { headers }
        );

        const testCases = response.data.choices.map(choice => choice.text.trim());
        return testCases;
    } catch (error) {
        console.error('Error generating test cases:', error.message);
        return []; // Return empty array or handle error as appropriate for your application
    }
}

module.exports = { generateTestCases };

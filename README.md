# AI Test Case Generator

The AI Test Case Generator is a tool I'm designing to automatically generate test cases based on given requirements using OpenAI's GPT-3 language model.

## Features

- **Automatic Test Case Generation:** Quickly generate test cases by providing a requirement statement.
- **Customizable Parameters:** Adjust parameters like maximum tokens and temperature to control the output.
- **Integration with OpenAI:** Utilizes OpenAI's powerful language models for generating natural language outputs.

## Installation

To install and use the AI Test Case Generator, follow these steps:

1. Clone the repository:

    ```bash
    https://github.com/bennhub/ai-test-case-generator.git
    cd ai-test-case-generator
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
   
   Create a `.env` file in the root directory with your OpenAI API key:

    ```plaintext
    API_KEY=your_openai_api_key_here
    ```

    Replace `your_openai_api_key_here` with your actual OpenAI API key.

## Usage

To generate test cases, use the provided function in your Node.js application:

```javascript
const { generateTestCases } = require('./generateTestCases'); // Adjust path as necessary

async function main() {
    const requirement = "Example requirement statement";
    const testCases = await generateTestCases(requirement);
    console.log("Generated test cases:", testCases);
}

main();

document.getElementById('testcase-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const requirement = document.getElementById('requirement').value;

    try {
        const response = await fetch('http://localhost:3000/generate-testcase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ requirement })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const generatedTestCases = data.testcases;

        const generatedTestCasesDiv = document.getElementById('generated-testcases');
        generatedTestCasesDiv.innerHTML = '';

        if (Array.isArray(generatedTestCases)) {
            generatedTestCases.forEach(testCase => {
                const testCaseElement = document.createElement('div');
                testCaseElement.textContent = testCase;
                generatedTestCasesDiv.appendChild(testCaseElement);
            });
        } else {
            const errorElement = document.createElement('div');
            errorElement.textContent = 'No test cases generated.';
            generatedTestCasesDiv.appendChild(errorElement);
        }
    } catch (error) {
        console.error('Error generating test cases:', error.message);

        const errorElement = document.createElement('div');
        errorElement.textContent = 'Error generating test cases. Please try again later.';
        const generatedTestCasesDiv = document.getElementById('generated-testcases');
        generatedTestCasesDiv.innerHTML = '';
        generatedTestCasesDiv.appendChild(errorElement);
    }
});

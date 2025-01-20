exports.handler = async (event) => {
    try {
        const { num1, num2 } = event;

        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Invalid input. Both num1 and num2 should be numbers.");
        }

        const result = num1 + num2;
        
        return {
            statusCode: 200,
            body: JSON.stringify({ result }),
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: error.message }),
        };
    }
};

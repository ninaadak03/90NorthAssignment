const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        const { fileContent, fileType } = event;  // file should be base64-encoded
        const bucketName = "your-existing-bucket-name";

        if (!fileContent || !fileType) {
            throw new Error("Missing required fields: 'fileContent' or 'fileType'.");
        }

        // to generate unique filename
        const fileName = `uploads/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileType}`;

        // convert base64 to buffer
        const fileBuffer = Buffer.from(fileContent, 'base64');

        const uploadParams = {
            Bucket: bucketName,
            Key: fileName,
            Body: fileBuffer,
            ContentType: fileType === 'pdf' ? 'application/pdf' : 'application/octet-stream',
        };

        await s3.upload(uploadParams).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "File uploaded successfully",
                fileUrl: `https://${bucketName}.s3.amazonaws.com/${fileName}`
            }),
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: error.message }),
        };
    }
};

# AWS Lambda Functions

This repository contains two AWS Lambda functions:

1. **Addition Function** – Adds two numbers and returns the result.  
2. **S3 File Upload Function** – Uploads a document or PDF file to an S3 bucket.

---

## 1. Addition Function

### Description
A simple Lambda function that takes two numbers as input and returns their sum.

### Example Payload
```json
{
  "num1": 5,
  "num2": 10
}
```

### Example Response
```json
{
  "result": 15
}
```

### Deployment Steps
1. Write the function in Node.js/Python.
2. Zip and upload to AWS Lambda.
3. Invoke the function with the sample payload.

---

## 2. S3 File Upload Function

### Description
This Lambda function uploads a document or PDF file to an Amazon S3 bucket.

### Environment Variables
| Variable Name | Description         |
|---------------|---------------------|
| `BUCKET_NAME`  | Target S3 bucket name |

### Example Payload (Base64 Encoded)
```json
{
  "fileName": "document.pdf",
  "fileContent": "base64_encoded_data_here"
}
```

### Deployment Steps
1. Add necessary permissions to access S3.
2. Zip and upload the function to AWS Lambda.
3. Trigger the function using API Gateway or S3 events.

---

## Prerequisites
- AWS Account with Lambda and S3 access.
- IAM Role with necessary permissions.

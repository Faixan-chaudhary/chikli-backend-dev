import { S3Client } from '@aws-sdk/client-s3';

const client = new S3Client({
    region: 'us-east-1',
});

export default client;

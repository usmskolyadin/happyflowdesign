import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  endpoint: 'https://s3.twcstorage.ru',
  region: 'ru-1',
  credentials: {
    accessKeyId: 'T2QHACIQ8264TCPM4L87',
    secretAccessKey: 'vM9DYVD2jwF4MHXpBSHU5t6CvrYRvZd0SDfMPjuk'
  },
  forcePathStyle: true 
});

const BUCKET_NAME = '6db96ccb-05f8ff90-4c5f-427b-9d14-b830aeef9606';

export async function uploadToS3(file: File): Promise<string> {
  const fileKey = `uploads/${Date.now()}-${file.name}`;
  
  const params = {
    Bucket: BUCKET_NAME,
    Key: fileKey,
    Body: Buffer.from(await file.arrayBuffer()),
    ContentType: file.type
  };

  await s3Client.send(new PutObjectCommand(params));

  return `https://${BUCKET_NAME}.s3.twcstorage.ru/${fileKey}`;
}
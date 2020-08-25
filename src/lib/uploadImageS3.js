import { S3 } from "aws-sdk";

const s3 = new S3();

export async function uploadImageS3(key, body) {
  const result = await s3
    .upload({
      Bucket: process.env.AUCTIONS_BUCKET_NAME,
      Key: key,
      Body: body,
      ContentEncoding: "base64",
      ContentType: "image/jpeg",
    })
    .promise();

  return result.Location;
}

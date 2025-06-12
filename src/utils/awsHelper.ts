import { myS3Client } from "@/config/awsBucket";
import { env } from "@/env";
import { DeleteObjectsCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { readFile, unlink } from "fs/promises";
import { ApiError } from "./apiError";

export const uploadTos3 = async (filename: string, filepath: string) => {
  try {
    const command = new PutObjectCommand({
      Bucket: env.AWS_BUCKETNAME,
      Key: `uploads/${filename}`,
      Body: await readFile(`${filepath}`),
    });
    const responce = await myS3Client.send(command);
    const link = `https://${env.AWS_BUCKETNAME}.s3-${env.AWS_BUCKETREGION}.amazonaws.com/uploads/${filename}`;

    await unlink(filepath);
    return { responce, link };
  } catch (error) {
    const result = (error as Error).message;
    throw new ApiError(500, result);
  }
};
export const deleteFormS3 = async (filename: string) => {
  const input = {
    Bucket: env.AWS_BUCKETNAME,
    Delete: {
      Objects: [
        {
          Key: `uploads/${filename}`,
          // VersionId: "2LWg7lQLnY41.maGB5Z6SWW.dcq0vx7b"
        },
      ],
      Quiet: false,
    },
  };
  const command = new DeleteObjectsCommand(input);
  const response = await myS3Client.send(command);

  console.log(response);
};

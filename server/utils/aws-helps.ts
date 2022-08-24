import AWS from 'aws-sdk';
require("dotenv").config({path:".env"})
const ID = process.env.AWS_ID;
const SECRET = process.env.AWS_CLAVE;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const s3=new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  })

 export const awsUploadImage=async(file:any, filePath:any)=> {

    const params = {
      Bucket: BUCKET_NAME,
      Key: `${filePath}`,
      Body: file,
    };
  
    try {
      const response = await s3.upload(params as any).promise();
      return response.Location;
    } catch (error) {
      
      throw new Error("error en envio de imagenes");
    }
  }
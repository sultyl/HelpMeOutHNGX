import AWS from 'aws-sdk';


const bucketName = 'abdazib';
const S3_ACCESS_KEY = "AKIA33JDDYZFONTW6HUY"
const S3_SECRET_ACCESS_KEY = "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"



AWS.config.update({
  accessKeyId: S3_ACCESS_KEY,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  region: 'eu-north-1'
});

const s3 = new AWS.S3();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Generating a unique name for the video
    const videoName = `${Date.now()}.webm`;

    // Upload the video to S3
    const uploadParams = {
      Bucket: bucketName,
      Key: videoName,
      Body: req.body,
      ContentType: 'video/webm'
    };

    try {
      const data = await s3.upload(uploadParams).promise();

      // Send the URL of the uploaded video
      res.status(200).json({ url: data.Location });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error uploading video' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' }); // Only allowing POST requests
  }
}
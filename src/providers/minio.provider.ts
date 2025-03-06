import { Injectable } from '@nestjs/common';
import { Client } from 'minio';

@Injectable()
export class MinioService {
  private readonly minioClient: Client;

  constructor() {
    this.minioClient = new Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: 'admin',
      secretKey: 'admin123',
    });
  }

  async uploadFile(bucketName: string, file: Express.Multer.File): Promise<string> {

    console.log(file);

    const fileName = `${Date.now()}-${file.originalname}`;

    await this.minioClient.putObject(bucketName, fileName, file.buffer, undefined, {
      'Content-Type': file.mimetype,
    });

    return `http//localhost:9001/${bucketName}/${fileName}`;
  }
}

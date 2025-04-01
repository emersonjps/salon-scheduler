import { Injectable } from '@nestjs/common';
import { Client } from 'minio';

@Injectable()
export class MinioService {
    private readonly minioClient: Client;

    constructor() {
        this.minioClient = new Client({
            endPoint: 'localhost',
            port: parseInt(process.env.MINIO_PORT || '9000', 10),
            useSSL: false,
            accessKey: process.env.MINIO_ACCESS_KEY,
            secretKey: process.env.MINIO_SECRET_KEY,
        });
    }

    async uploadFile(bucketName: string, file: Express.Multer.File): Promise<string> {
        const fileName = `${Date.now()}-${file.originalname}`;

        await this.minioClient.putObject(bucketName, fileName, file.buffer, undefined, {
            'Content-Type': file.mimetype,
        });

        return `http://localhost:${process.env.MINIO_PORT || '9000'}/${bucketName}/${fileName}`;
    }
}

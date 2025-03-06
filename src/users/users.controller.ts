import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MinioService } from '../providers/minio.provider';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UserController {
  constructor(
    private readonly minioService: MinioService
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadUserImage(@UploadedFile() file: Express.Multer.File) {
    const imageUrl = await this.minioService.uploadFile('bucket-belezou', file);
    
    // Aqui você salvaria `imageUrl` no banco de dados junto ao usuário
    return { imageUrl };
  }
}

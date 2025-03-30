import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MinioService } from '../../providers/minio.provider';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly minioService: MinioService,
    private readonly usersService: UsersService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadUserImage(@UploadedFile() file: Express.Multer.File, @Body() body: {userId: number}) {
    const imageUrl = await this.minioService.uploadFile(process.env.BUCKET_NAME, file);
    
    // Aqui você salvaria `imageUrl` no banco de dados junto ao usuário
    this.usersService.saveUserImage(body.userId, imageUrl);
    return { imageUrl };
  }
}

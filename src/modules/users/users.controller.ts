import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MinioService } from '../../providers/minio.provider';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/auth/constants/User.Roles';

@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(
    private readonly minioService: MinioService,
    private readonly usersService: UsersService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadUserImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('user_id') user_id: number,
  ) {
    const imageUrl = await this.minioService.uploadFile(
      process.env.BUCKET_NAME,
      file,
    );

    this.usersService.saveUserImage(user_id, imageUrl);
    return { imageUrl };
  }

  @Get('test')
  @Roles(UserRole.ADMIN)
  async testRouteAdmin(): Promise<string> {
    return 'aqui -----> <------- aqui';
  }
}

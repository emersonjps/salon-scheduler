import { Controller, Post, UploadedFile, UseGuards, UseInterceptors, Req, Body } from '@nestjs/common';
import { MinioService } from '../../providers/minio.provider';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/auth/constants/User.Roles';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtPayload } from 'src/auth/interface/JwtPayload';
import UserChangePasswordDto from 'src/auth/dto/UserChangePasswordDto';
import * as bcrypt from 'bcrypt';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
    constructor(
        private readonly minioService: MinioService,
        private readonly usersService: UsersService,
        private readonly JWtService: JwtService,
    ) {}

    @Post('upload')
    @ApiBody({ type: 'multipart/form-data' })
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new Error('No token provided');
        }

        const decodedToken = this.JWtService.decode<JwtPayload>(token);
        const user_id = decodedToken.sub;

        const imageUrl = await this.minioService.uploadFile(process.env.BUCKET_NAME, file);
        if (!imageUrl) {
            throw new Error('Error uploading image');
        }

        await this.usersService.saveImage(user_id, imageUrl);
        return { imageUrl };
    }

    @Post('change-password')
    @ApiBearerAuth('jwt-auth')
    @ApiBody({ type: UserChangePasswordDto })
    async changePassword(@Req() req: Request, @Body() body: UserChangePasswordDto) {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new Error('No token provided');
        }

        const decodedToken = this.JWtService.decode<JwtPayload>(token);
        const user_id = decodedToken.sub;

        const { password } = body;
        if (!password) {
            throw new Error('No password provided');
        }

        const salt = await bcrypt.genSalt();
        const _password = await bcrypt.hash(password, salt);

        await this.usersService.changePassword(user_id, _password);
        return { message: 'Password changed successfully' };
    }

    @Post('create-professional')
    @Roles(UserRole.ADMIN)
    async testRouteAdmin(): Promise<string> {
        return Promise.resolve('aqui -----> <------- aqui');
    }
}

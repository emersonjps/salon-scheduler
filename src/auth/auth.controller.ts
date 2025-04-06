import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import UserAuthDto from './dto/UserAuthDto';
import UserRegisterAuthDto from './dto/UserRegisterAuthDto';
import { Public } from './roles.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    @ApiBody({ type: UserRegisterAuthDto })
    signUp(@Body() signUpDto: UserRegisterAuthDto) {
        return this.authService.signUp(signUpDto);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiBody({ type: UserAuthDto })
    signIn(@Body() signInDto: UserAuthDto) {
        return this.authService.signIn(signInDto);
    }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import UserAuthDto from './dto/UserAuthDto';
import UserSignUpAuthDto from './dto/UserRegisterAuthDto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signUp( _user: UserSignUpAuthDto ): Promise<{ access_token: string }> {
    const salt = await bcrypt.genSalt();
    _user.password = await bcrypt.hash(_user.password, salt);
    const user = await this.usersService.create(_user);
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signIn( _user: UserAuthDto ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(_user.email);
    if (!user || !(await bcrypt.compare(_user.password, user.password))) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}

import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtPayload } from 'src/auth/interface/JwtPayload';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class JwtUtils {
    constructor(private readonly jwtService: JwtService) {}

    decodeToken(req: Request): JwtPayload {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new Error('No token provided');
        }

        return this.jwtService.decode<JwtPayload>(token);
    }
}

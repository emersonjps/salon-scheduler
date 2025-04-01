import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY, ROLES_KEY } from './roles.decorator';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface/JwtPayload';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(
        private reflector: Reflector,
        private jwtService: JwtService,
    ) {
        super();
    }

    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }

        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest<{ headers: { authorization?: string } }>();

        const authorizationHeader = request.headers.authorization;
        const token = authorizationHeader ? authorizationHeader.split(' ')[1] : undefined;
        if (!token) {
            throw new UnauthorizedException('No token provided');
        }

        const payload = this.jwtService.verify<JwtPayload>(token);
        const hasRole = () => requiredRoles.includes(payload.role);

        if (!hasRole()) {
            throw new UnauthorizedException('Insufficient permissions');
        }

        return super.canActivate(context);
    }
}

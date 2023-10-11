import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../services/user.service';

export class AuthGuard implements CanActivate{

    constructor(
        private readonly JwtService: JwtService,
        private readonly UserService: UserService
    ){}

   async canActivate(context: ExecutionContext): Promise<boolean>  {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        //verifico se o token existe
        if (!token) {
            throw new UnauthorizedException('Token inexistente')
        }

        let username = '';
        try{
            const payload = await this.JwtService.verifyAsync(token)
            username = payload.userName;
        }catch{
            throw new UnauthorizedException('Token inválido')
        }

        //To-do: Verificar se o usuário do payload está cadastrado
        const found = await this.UserService.findByUsername(username);

        if (!found){
            throw new UnauthorizedException('Usuário não cadastrado')
        }

        return true;
    }

    extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];

        return type === 'Bearer' ? token : undefined;


    }

}

 
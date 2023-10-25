import { Body, Controller, Post, UnauthorizedException, HttpCode, HttpStatus} from "@nestjs/common";
import { AuthService } from "src/services/auth.service";
import { JwtService } from "@nestjs/jwt";

@Controller('auth')
export class AuthController {

    constructor(
        private readonly service: AuthService,
        private readonly jwtService: JwtService
    ){}
    
    @Post('signin')
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() credential: Record<string, string>) {

        const found = await this.service.validateCredential(credential.username, credential.password)

        if(!found){
            throw new UnauthorizedException();
        }

        const payload = {userId: found.id, userName: found.username, fullName: found.fullname}

        const token = await this.jwtService.signAsync(payload);

        return{
            acessToken: token
        }
    }
}
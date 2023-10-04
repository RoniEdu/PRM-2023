
import { Body, Controller, Post, UnauthorizedException, HttpCode, HttpStatus} from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(
        private readonly service: AuthService
    ){}
    
    @Post('signin')
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() credential: Record<string, string>) {

        const found = await this.service.validateCredential(credential.username, credential.password)

        if(!found){
            throw new UnauthorizedException();
        }

        return{
            status: "deu certo"
        }
    }

}
import { Body, Controller, Post, UnauthorizedException, HttpCode, HttpStatus, UseInterceptors, ClassSerializerInterceptor, HttpException} from "@nestjs/common";
import { AuthService } from "src/services/auth.service";
import { JwtService } from "@nestjs/jwt";
import { UserService } from './../services/user.service';
import { User } from "src/entities/user.entity";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {

    constructor(
        private readonly service: AuthService,
        private readonly jwtService: JwtService,
        private readonly UserService: UserService
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
        };
    }
    @Post('signup')
    async signUp(@Body() user: User): Promise<User>{

        const found = await this.UserService.findByUsername(user.username);

        if(found) {
            throw new HttpException('Este nome do usuário já está em uso', HttpStatus.CONFLICT)
        }

        return this.UserService.create(user);
    }
}
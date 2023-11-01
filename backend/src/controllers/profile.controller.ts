import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { User } from 'src/entities/user.entity';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@UseInterceptors(ClassSerializerInterceptor)

@Controller('profile')
export class ProfileController {
    constructor(private userService: UserService){}

    @Get(':username')
    getProfile(@Param('username')username: string): Promise<User>{
        const found = this.userService.findByUsername(username);

        if(!found){
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND)
        }
        return found;
    }
}
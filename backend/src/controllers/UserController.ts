import { ParseIntPipe } from "@nestjs/common";
import { Body, Controller, Get, Param, Post, Delete, HttpCode } from "@nestjs/common/decorators";
import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";
import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
import { Put } from "@nestjs/common/decorators";


@Controller('users')
export class UserController {

    constructor(private readonly service: UserService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.service.findAll();
    }

     @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        const found = this.service.findByid(id);

    if(!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }
        return found;
    }

    @Get(':username')
    async findByUsername(@Param('username') username: string): Promise<User> {
        const found = await this.service.findByUsername(username);

    if(!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }
        return found;
    }

    @Post()
    create(@Body() user: User): Promise<User> {
        return this.service.create(user);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        const found = this.service.findByid(id);

        if(!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return this.service.delete(id);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() user: User): Promise<User> {
        const found = this.service.findByid(id);

    if(!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }
        return this.service.update(id, user);
    }

}

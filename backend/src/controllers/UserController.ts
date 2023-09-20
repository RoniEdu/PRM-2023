import { ParseIntPipe } from "@nestjs/common";
import { Body, Controller, Get, Param, Post, Delete, HttpCode } from "@nestjs/common/decorators";
import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";



@Controller('users')
export class UserController {

    constructor(private readonly service: UserService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.service.findByid(id);
    }

    @Post()
    create(@Body() user: User): Promise<User> {
        return this.service.create(user);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.service.delete(id);
    }
}

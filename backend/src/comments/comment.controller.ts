import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { Comment } from './comment.entity';
import { CommentService } from "./comment.service";
import { TopicService } from "src/topics/topic.service";
import { AuthGuard } from "src/auth/auth.guard";



@UseInterceptors(ClassSerializerInterceptor)
@Controller('comments')
export class CommentController {
    constructor(
        private readonly service: CommentService,
        private readonly userService: TopicService
    ) { }

    //pode ser usado para os likes
    @UseGuards(AuthGuard)
    @Get()
    async findByTopic(@Query() query): Promise<Comment[]> {

        if (query?.topic) {
            throw new HttpException('Tópico não informado', HttpStatus.BAD_REQUEST)
        }
        //Busco os tópicos do usuário
        const found = await this.userService.findById(query.topic);

        if (!found) {
            throw new HttpException('Tópico não encontrado', HttpStatus.BAD_REQUEST)
        }

        return this.service.findByTopic(found);
    }



@Post()
create(@Body() topic: Comment): Promise < Comment > {
    return this.service.create(topic);
}

@Delete(':id')
@HttpCode(204)
async delete (@Param('id', ParseIntPipe) id: number): Promise < void> {
    const found = await this.service.findById(id);
}
}
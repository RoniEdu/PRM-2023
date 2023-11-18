import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { TopicModule } from "src/topics/topic.module";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [TypeOrmModule.forFeature([Comment]), TopicModule, UserModule],
    providers: [ CommentService ],
    controllers: [ CommentController ]
})
export class CommentModule {}
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TopicController } from "./TopicController";
import { TopicService } from "./topic.service";
import { Topic } from "./topic.entity";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [TypeOrmModule.forFeature([Topic]), UserModule],
    providers: [ TopicService ],
    controllers: [ TopicController ],
    exports: [ TopicService ]
})
export class TopicModule {}
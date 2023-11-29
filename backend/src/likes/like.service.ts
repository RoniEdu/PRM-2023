import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Topic } from './../topics/topic.entity';

@Injectable()
export class LikeService {

    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>,
    ) {}

    findByTopic(topic: Topic): Promise<Topic[]> {
        return this.repository.find({
            where: {
                like: {
                    id: topic.id
                }
            }
        });
    }
}
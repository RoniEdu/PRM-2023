import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { ApplicationException } from "src/@exceptions";
import { Repository } from "typeorm";
import { Comment } from "src/comments/comment.entity";
import { Topic } from 'src/topics/topic.entity';

@Injectable()
export class TopicService {

    constructor(
        @InjectRepository(Comment)
        private readonly repository: Repository<Comment>,
    ) {}

    findByTopic(topic: Topic): Promise<Comment[]> {
        return this.repository.find({
            where: {
                topic: {
                    id: topic.id
                }
            }
        });
    }
    findById(id: number): Promise<Comment> {
        return this.repository.findOneBy({ id: id });
    }
    findByUser(user: User): Promise<Comment[]> {
        return this.repository.find({
            where: {
                owner: {
                    id: user.id
                }
            },
            order: {
                id: 'DESC'
            }
        });
    }
    create(Topic: Comment): Promise<Comment> {
        return this.repository.save(Comment);
    }
    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async update(id: number, Comment: Comment): Promise<Comment> {

        const found = await this.repository.findOneBy({id: id})

        if (!found) {
            throw new ApplicationException('Comment not found', 404)
        }

        //Garante que o objeto substituido terá o mesmo ID da requisição
        Comment.id = id;

        return this.repository.save(Comment);

    }
}
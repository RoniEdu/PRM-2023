import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Topic } from "src/topics/topic.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
  
    //Sem essa parte se for fazer o curtir
    @Column({nullable: false, length: 250})
    content: string;

    @ManyToOne(() => User, {eager: true, nullable: false})
    @JoinColumn({name: 'user_id'})
    User: User;

    @ManyToOne(() => User, {eager: true, nullable: false})
    @JoinColumn({name: 'topic_id'})
    Topic: Topic;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}
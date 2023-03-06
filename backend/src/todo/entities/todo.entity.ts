import { User } from '../../user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  completed: boolean;

  @Type(() => Date)
  @Column()
  @IsOptional()
  deadline: string;

  //   many todos can belong to single user
  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}

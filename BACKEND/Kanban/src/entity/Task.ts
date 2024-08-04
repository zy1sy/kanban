import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Project } from './Project';
import { Comment } from './Comment';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Project, project => project.tasks)
  project: Project;

  @OneToMany(() => Comment, comment => comment.task)
  comments: Comment[];
}

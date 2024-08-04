// src/service/task.service.ts
import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entity/Task';
import { Comment } from '../entity/Comment';

@Provide()
export class TaskService {
  @InjectEntityModel(Task)
  taskModel: Repository<Task>;

  @InjectEntityModel(Comment)
  commentModel: Repository<Comment>;

  async createTask(name: string, projectId: number) {
    const task = new Task();
    task.name = name;
    task.project = { id: projectId } as any; // Using a partial Project object
    return await this.taskModel.save(task);
  }

  async getTasksByProject(projectId: number) {
    return this.taskModel.find({
      where: {
        project: { id: projectId }
      },
      relations: ['project'] // Ensure the relation is loaded
    });
  }

  async getComments(taskId: number) {
    return await this.commentModel.find({ where: { task: { id: taskId } } });
  }

  async addComment(taskId: number, text: string) {
    const comment = new Comment();
    comment.task = { id: taskId } as any; // Using a partial Task object
    comment.text = text;
    return await this.commentModel.save(comment);
  }
}

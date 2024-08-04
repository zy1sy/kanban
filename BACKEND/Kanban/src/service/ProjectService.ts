// src/service/project.service.ts
import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entity/Project';

@Provide()
export class ProjectService {
  @InjectEntityModel(Project)
  projectModel: Repository<Project>;

  async createProject(name: string, userId: number) {
    const project = new Project();
    project.name = name;
    project.user = { id: userId } as any; // 使用部分的 User 对象
    return await this.projectModel.save(project);
  }

  async getProjectsByUser(userId: number) {
    return await this.projectModel.find({
      where: {
        user: { id: userId }
      },
      relations: ['user'] // 确保加载 user 关联
    });
  }
}

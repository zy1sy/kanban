// src/controller/task.controller.ts
import { Inject, Controller, Get, Param } from '@midwayjs/core';
import { TaskService } from '../service/TaskService';

@Controller('/api/project')
export class TaskController {
  @Inject()
  taskService: TaskService;

  @Get('/:projectId/tasks')
  async getTasksByProject(@Param('projectId') projectId: number) {
    const tasks = await this.taskService.getTasksByProject(projectId);
    return { success: true, data: tasks };
  }
}

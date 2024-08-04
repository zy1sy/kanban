// src/ormconfig.ts
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Project } from './entity/Project';
import { Task } from './entity/Task';
import { Comment } from './entity/Comment';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'kanbanuser',
  password: '123',
  database: 'kanban',
  synchronize: true,
  logging: false,
  entities: [User, Project, Task, Comment],
});

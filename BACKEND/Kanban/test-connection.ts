import "reflect-metadata";
import { DataSource } from 'typeorm';
import { User } from './src/entity/User';
import { Project } from './src/entity/Project';
import { Task } from './src/entity/Task';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'kanbanuser',
  password: '123',
  database: 'kanban',
  synchronize: true,
  logging: true,
  entities: [User, Project, Task],
});

AppDataSource.initialize().then(async () => {
  console.log("Data Source has been initialized!");
}).catch((err) => {
  console.error("Error during Data Source initialization:", err);
});

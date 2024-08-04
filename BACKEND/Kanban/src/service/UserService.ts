// src/service/user.service.ts
import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/User';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async createUser(username: string, password: string) {
    console.log('userModel:', this.userModel);
    const user = new User();
    user.username = username;
    user.password = password; // Ensure to hash the password in a real application
    return await this.userModel.save(user);
  }

  async findUser(username: string, password: string) {
    return await this.userModel.findOne({ where: { username, password } });
  }

  async getUser(uid: number) {
    return await this.userModel.findOne({ where: { id: uid } });
  }
}

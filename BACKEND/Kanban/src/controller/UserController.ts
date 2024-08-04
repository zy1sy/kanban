
import { Inject, Controller, Post, Get, Body, Query } from '@midwayjs/core';
import { UserService } from '../service/UserService';

@Controller('/api/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Post('/register')
  async register(@Body() body) {
    const { username, password } = body;
    const user = await this.userService.createUser(username, password);
    return { success: true, message: 'User registered', data: user };
  }

  @Post('/login')
  async login(@Body() body) {
    const { username, password } = body;
    const user = await this.userService.findUser(username, password);
    if (user) {
      // Generate a token (mock implementation for demonstration)
      return { success: true, message: 'Login successful', token: 'fake-jwt-token', data: user };
    } else {
      return { success: false, message: 'Invalid username or password' };
    }
  }

  @Get('/get_user')
  async getUser(@Query('uid') uid) {
    const user = await this.userService.getUser(uid);
    return { success: true, message: 'OK', data: user };
  }
}


import { Controller, Get } from '@midwayjs/core';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Welcome to the Kanban Application!';
  }

  @Get('/home')
  async homePage(): Promise<string> {
    return 'This is the home page.';
  }
}

// src/configuration.ts
import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as cors from '@koa/cors';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
import { AppDataSource } from './ormconfig';
import { ReportMiddleware } from './middleware/report.middleware';

@Configuration({
  imports: [
    koa,
    validate,
    {
      component: info,
      enabledEnvironment: ['local'], // 在本地环境中启用
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady() {
    // 初始化 TypeORM 数据源
    try {
      await AppDataSource.initialize();
      console.log('Data Source has been initialized!');
    } catch (err) {
      console.error('Error during Data Source initialization:', err);
    }

    // 添加 CORS 中间件
    this.app.use(cors({
      origin: '*', // 允许所有来源访问
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的方法
    }));

    // 添加其他中间件
    this.app.useMiddleware([ReportMiddleware]);

    // 如果有自定义的错误过滤器，可以在这里添加
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}

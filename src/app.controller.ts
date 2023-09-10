import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  Home() {
    this.appService.home();
  }

  @Get('/chat')
  @Render('index')
  chatHome() {
    return { message: 'Hello world!' };
  }

  @Get('/api/chat')
  async Chat(@Res({ passthrough: true }) res: Response) {
    const messages = await this.appService.getMessages();
    res.json(messages);
  }
}

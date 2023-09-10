import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entity/chat.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
  ) {}

  home(): {
    message: string;
    route: string;
  } {
    return {
      message: 'welcome, and follow the route',
      route: '/chat',
    };
  }

  async createMessage(chat: Chat): Promise<Chat> {
    return await this.chatRepository.save(chat);
  }

  async getMessages(): Promise<Chat[]> {
    const chat = await this.chatRepository.find();
    console.log(chat);
    return chat;
  }
}

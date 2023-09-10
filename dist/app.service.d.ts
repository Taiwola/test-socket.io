import { Repository } from 'typeorm';
import { Chat } from './entity/chat.entity';
export declare class AppService {
    private chatRepository;
    constructor(chatRepository: Repository<Chat>);
    home(): {
        message: string;
        route: string;
    };
    createMessage(chat: Chat): Promise<Chat>;
    getMessages(): Promise<Chat[]>;
}

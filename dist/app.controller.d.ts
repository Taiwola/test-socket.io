import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    Home(): void;
    chatHome(): {
        message: string;
    };
    Chat(res: Response): Promise<void>;
}

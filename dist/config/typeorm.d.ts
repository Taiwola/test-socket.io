import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModule } from '@nestjs/typeorm';
export default class TypeormConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModule;
}
export declare const typeormConfigAsync: TypeOrmModuleAsyncOptions;

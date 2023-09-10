import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModule,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export default class TypeormConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModule {
    return {
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities: [],
      migrations: ['dist/migrations/*{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}

export const typeormConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeormConfig.getOrmConfig(configService),
  inject: [ConfigService],
};

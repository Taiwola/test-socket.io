"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfigAsync = void 0;
const config_1 = require("@nestjs/config");
class TypeormConfig {
    static getOrmConfig(configService) {
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
exports.default = TypeormConfig;
exports.typeormConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => TypeormConfig.getOrmConfig(configService),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=typeorm.js.map
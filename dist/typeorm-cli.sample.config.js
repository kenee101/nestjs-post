"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Password123#',
    database: 'nestjs-post',
    entities: ['**/*.entity.js'],
    migrations: ['migrations/*.js'],
});
//# sourceMappingURL=typeorm-cli.sample.config.js.map
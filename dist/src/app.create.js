"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appCreate = appCreate;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const aws_sdk_1 = require("aws-sdk");
function appCreate(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('NestJs Implementation of a Posts API')
        .setDescription('Use the base API URL as http://localhost:3000')
        .setTermsOfService('http://localhost:3000/terms-of-service')
        .setLicense('MIT License', 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt')
        .addServer('http://localhost:3000')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Enter JWT token',
        in: 'header',
    }, 'access-token')
        .addSecurityRequirements('access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            security: [
                {
                    'JWT-auth': [],
                },
            ],
        },
    });
    const configService = app.get(config_1.ConfigService);
    aws_sdk_1.config.update({
        credentials: {
            accessKeyId: configService.get('appConfig.awsAccessKeyId'),
            secretAccessKey: configService.get('appConfig.awsSecretAccessKey'),
        },
        region: configService.get('appConfig.awsRegion'),
    });
    app.enableCors();
}
//# sourceMappingURL=app.create.js.map
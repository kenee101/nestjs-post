"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ejs_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");
const mail_service_1 = require("./providers/mail.service");
const mailer_1 = require("@nestjs-modules/mailer");
const path_1 = require("path");
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useFactory: async (config) => ({
                    transport: {
                        host: config.get('appConfig.mailHost'),
                        secure: false,
                        port: 2525,
                        auth: {
                            user: config.get('appConfig.smtpUsername'),
                            pass: config.get('appConfig.smtpPassword'),
                        },
                    },
                    defaults: {
                        from: `"My Posts" <no-repy@nestjs-post.com>`,
                    },
                    template: {
                        dir: (0, path_1.join)(__dirname, 'templates'),
                        adapter: new ejs_adapter_1.EjsAdapter({ inlineCssEnabled: true }),
                        options: {
                            strict: false,
                        },
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [mail_service_1.MailService],
        exports: [mail_service_1.MailService],
    })
], MailModule);
//# sourceMappingURL=mail.module.js.map
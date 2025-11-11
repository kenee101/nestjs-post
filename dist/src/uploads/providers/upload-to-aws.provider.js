"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadToAwsProvider = void 0;
const path = require("path");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const aws_sdk_1 = require("aws-sdk");
const uuid_1 = require("uuid");
let UploadToAwsProvider = class UploadToAwsProvider {
    constructor(configService) {
        this.configService = configService;
    }
    async fileupload(file) {
        const s3 = new aws_sdk_1.S3();
        try {
            const uploadResult = await s3
                .upload({
                Bucket: this.configService.get('appConfig.awsBucketName'),
                Body: file.buffer,
                Key: this.generateFileName(file),
                ContentType: file.mimetype,
            })
                .promise();
            return uploadResult.Key;
        }
        catch (error) {
            throw new common_1.RequestTimeoutException(error);
        }
    }
    generateFileName(file) {
        let name = file.originalname.split('.')[0];
        name.replace(/\s/g, '').trim();
        let extension = path.extname(file.originalname);
        let timeStamp = new Date().getTime().toString().trim();
        return `${name}-${timeStamp}-${(0, uuid_1.v4)()}${extension}`;
    }
};
exports.UploadToAwsProvider = UploadToAwsProvider;
exports.UploadToAwsProvider = UploadToAwsProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UploadToAwsProvider);
//# sourceMappingURL=upload-to-aws.provider.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const upload_to_aws_provider_1 = require("./upload-to-aws.provider");
const file_types_enum_1 = require("../enums/file-types.enum");
const typeorm_1 = require("@nestjs/typeorm");
const upload_entity_1 = require("../upload.entity");
const typeorm_2 = require("typeorm");
let UploadsService = class UploadsService {
    constructor(uploadToAwsProvider, configService, uploadsRepository) {
        this.uploadToAwsProvider = uploadToAwsProvider;
        this.configService = configService;
        this.uploadsRepository = uploadsRepository;
    }
    async uploadFile(file) {
        if (!['image/gif', 'image/jpeg', 'image/jpg', 'image/png'].includes(file.mimetype)) {
            throw new common_1.BadRequestException('MIME type not supported');
        }
        try {
            const path = await this.uploadToAwsProvider.fileupload(file);
            const uploadFile = {
                name: path,
                path: `https://${this.configService.get('appConfig.awsCloudfrontUrl')}/${path}`,
                type: file_types_enum_1.fileTypes.IMAGE,
                mime: file.mimetype,
                size: file.size,
            };
            const upload = this.uploadsRepository.create(uploadFile);
            return await this.uploadsRepository.save(upload);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
};
exports.UploadsService = UploadsService;
exports.UploadsService = UploadsService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(upload_entity_1.Upload)),
    __metadata("design:paramtypes", [upload_to_aws_provider_1.UploadToAwsProvider,
        config_1.ConfigService,
        typeorm_2.Repository])
], UploadsService);
//# sourceMappingURL=uploads.service%20copy.js.map
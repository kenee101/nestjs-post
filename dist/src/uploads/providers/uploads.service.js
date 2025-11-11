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
exports.UploadsService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const ocr_provider_1 = require("./ocr.provider");
const fs_2 = require("fs");
const ALLOWED_FILE_TYPES = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'application/pdf',
];
const MAX_FILE_SIZE = 5 * 1024 * 1024;
let UploadsService = class UploadsService {
    constructor(configService, ocrProvider) {
        this.configService = configService;
        this.ocrProvider = ocrProvider;
        this.uploadDir = (0, path_1.join)(__dirname, '..', '..', 'uploads', 'folder');
        if (!(0, fs_1.existsSync)(this.uploadDir)) {
            (0, fs_1.mkdirSync)(this.uploadDir, { recursive: true });
        }
    }
    async uploadFile(file) {
        if (!ALLOWED_FILE_TYPES.includes(file.mimetype)) {
            throw new common_1.BadRequestException(`Invalid file type. Allowed types: ${ALLOWED_FILE_TYPES.join(', ')}`);
        }
        if (file.size > MAX_FILE_SIZE) {
            throw new common_1.BadRequestException(`File too large. Maximum size: ${MAX_FILE_SIZE / (1024 * 1024)}MB`);
        }
        const filename = 'test-image-1.jpg';
        const filePath = (0, path_1.join)(this.uploadDir, filename);
        try {
            await fs_2.promises.writeFile(filePath, file.buffer);
            let textContent;
            if (file.mimetype.startsWith('image/')) {
                try {
                    textContent = await this.ocrProvider.extractTextFromImage(filePath);
                }
                catch (error) {
                    console.error('OCR processing failed, continuing without text extraction:', error);
                }
            }
            return {
                filename,
                path: filePath,
                mimeType: file.mimetype,
                size: file.size,
                textContent,
            };
        }
        catch (error) {
            if ((0, fs_1.existsSync)(filePath)) {
                (0, fs_1.unlinkSync)(filePath);
            }
            throw new common_1.InternalServerErrorException('Failed to process file');
        }
    }
};
exports.UploadsService = UploadsService;
exports.UploadsService = UploadsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        ocr_provider_1.OcrProvider])
], UploadsService);
//# sourceMappingURL=uploads.service.js.map
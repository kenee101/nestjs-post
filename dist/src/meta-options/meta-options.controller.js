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
exports.MetaOptionsController = void 0;
const create_post_meta_options_dto_1 = require("./dtos/create-post-meta-options.dto");
const meta_options_service_1 = require("./providers/meta-options.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let MetaOptionsController = class MetaOptionsController {
    constructor(MetaOptionsService) {
        this.MetaOptionsService = MetaOptionsService;
    }
    async create(createPostMetaOptionsDto) {
        return this.MetaOptionsService.create(createPostMetaOptionsDto);
    }
};
exports.MetaOptionsController = MetaOptionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new meta option' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Meta option created successfully' }),
    (0, swagger_1.ApiBody)({ type: create_post_meta_options_dto_1.CreatePostMetaOptionsDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_meta_options_dto_1.CreatePostMetaOptionsDto]),
    __metadata("design:returntype", Promise)
], MetaOptionsController.prototype, "create", null);
exports.MetaOptionsController = MetaOptionsController = __decorate([
    (0, swagger_1.ApiTags)('Meta Options'),
    (0, common_1.Controller)('meta-options'),
    __metadata("design:paramtypes", [meta_options_service_1.MetaOptionsService])
], MetaOptionsController);
//# sourceMappingURL=meta-options.controller.js.map
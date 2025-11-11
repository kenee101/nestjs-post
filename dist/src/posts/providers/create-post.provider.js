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
exports.CreatePostProvider = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/providers/users.service");
const typeorm_1 = require("typeorm");
const post_entity_1 = require("../post.entity");
const typeorm_2 = require("@nestjs/typeorm");
const tags_service_1 = require("../../tags/providers/tags.service");
let CreatePostProvider = class CreatePostProvider {
    constructor(usersService, postsRepository, tagsService) {
        this.usersService = usersService;
        this.postsRepository = postsRepository;
        this.tagsService = tagsService;
    }
    async create(createPostDto, user) {
        let author = undefined;
        let tags = undefined;
        try {
            author = await this.usersService.findOneById(user.sub);
            tags = await this.tagsService.findMultipleTags(createPostDto.tags);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
        if (createPostDto.tags.length !== tags.length) {
            throw new common_1.BadRequestException('Please check your tag Ids');
        }
        let post = this.postsRepository.create({
            ...createPostDto,
            author: author,
            tags: tags,
        });
        try {
            return await this.postsRepository.save(post);
        }
        catch (error) {
            throw new common_1.ConflictException(error, {
                description: 'Ensure post slug is unique and not a duplicate',
            });
        }
    }
};
exports.CreatePostProvider = CreatePostProvider;
exports.CreatePostProvider = CreatePostProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        typeorm_1.Repository,
        tags_service_1.TagsService])
], CreatePostProvider);
//# sourceMappingURL=create-post.provider.js.map
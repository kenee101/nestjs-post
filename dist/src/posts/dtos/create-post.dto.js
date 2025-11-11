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
exports.CreatePostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_post_meta_options_dto_1 = require("../../meta-options/dtos/create-post-meta-options.dto");
const class_transformer_1 = require("class-transformer");
const postStatus_enum_1 = require("../enums/postStatus.enum");
const postType_enum_1 = require("../enums/postType.enum");
class CreatePostDto {
}
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This is a title',
        description: 'This is the title for the blog post',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(512),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: postType_enum_1.postType,
        description: "Possible values, 'post', 'page', 'story', 'series'",
    }),
    (0, class_validator_1.IsEnum)(postType_enum_1.postType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "postType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "For Example - 'my-url'",
        example: 'my-blog-post',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
    }),
    (0, class_validator_1.MaxLength)(256),
    __metadata("design:type", String)
], CreatePostDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: postStatus_enum_1.postStatus,
        description: "Possible values 'draft', 'scheduled', 'review', 'published'",
    }),
    (0, class_validator_1.IsEnum)(postStatus_enum_1.postStatus),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'This is the content of the post',
        example: 'The post content',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Serialize your JSON object else a validation error will be thrown',
        example: '{\r\n "@context": "https://schema.org",\r\n "@type": "Person"\r\n }',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsJSON)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "schema", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Featured image for your blog post',
        example: 'http://localhost.com/images/image1.jpg',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.MaxLength)(1024),
    __metadata("design:type", String)
], CreatePostDto.prototype, "featuredImageUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The date on which the blog post is published',
        example: '2024-03-16T07:46:32+0000',
    }),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePostDto.prototype, "publishOn", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Array of ids of tags',
        example: [1, 2],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'object',
        required: false,
        items: {
            type: 'object',
            properties: {
                metavalue: {
                    type: 'json',
                    description: 'The metaValue is a JSON string',
                    example: '{"sidebarEnabled": true}',
                },
            },
        },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_post_meta_options_dto_1.CreatePostMetaOptionsDto),
    __metadata("design:type", create_post_meta_options_dto_1.CreatePostMetaOptionsDto)
], CreatePostDto.prototype, "metaOptions", void 0);
//# sourceMappingURL=create-post.dto.js.map
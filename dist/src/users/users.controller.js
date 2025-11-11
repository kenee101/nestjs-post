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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dtos/create-user.dto");
const get_users_param_dto_1 = require("./dtos/get-users-param.dto");
const patch_user_dto_1 = require("./dtos/patch-user.dto");
const users_service_1 = require("./providers/users.service");
const swagger_1 = require("@nestjs/swagger");
const create_many_users_dto_1 = require("./dtos/create-many-users.dto");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const auth_type_enum_1 = require("../auth/enums/auth-type.enum");
const user_entity_1 = require("./user.entity");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getUserById(getUsersParamDto) {
        return this.usersService.find(getUsersParamDto);
    }
    createUser(createUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    createManyUsers(createManyUsersDto) {
        return this.usersService.createMany(createManyUsersDto);
    }
    patchUser(patchUserDto) {
        return patchUserDto;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiOperation)({
        summary: 'Fetch registered user on the application',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User fetched successfully based on the query',
        type: user_entity_1.User,
        example: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
        },
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_param_dto_1.GetUsersParamDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Creates a new user',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User created successfully',
        example: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
        },
    }),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.CreateUserDto }),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('create-many'),
    (0, swagger_1.ApiOperation)({
        summary: 'Creates multiple users',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Users created successfully',
        example: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_many_users_dto_1.CreateManyUsersDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createManyUsers", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Update a user',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User updated successfully',
        example: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_user_dto_1.PatchUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "patchUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('Users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map
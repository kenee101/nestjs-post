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
exports.UsersService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const users_create_many_provider_1 = require("./users-create-many.provider");
const create_user_provider_1 = require("./create-user.provider");
const find_one_user_by_email_provider_1 = require("./find-one-user-by-email.provider");
const find_one_by_google_id_provider_1 = require("./find-one-by-google-id.provider");
const create_google_user_provider_1 = require("./create-google-user.provider");
let UsersService = class UsersService {
    constructor(usersRepository, usersCreateManyProvider, createUserProvider, findOneUserByEmailProvider, findOneByGoogleIdProvider, createGooogleUserProvider) {
        this.usersRepository = usersRepository;
        this.usersCreateManyProvider = usersCreateManyProvider;
        this.createUserProvider = createUserProvider;
        this.findOneUserByEmailProvider = findOneUserByEmailProvider;
        this.findOneByGoogleIdProvider = findOneByGoogleIdProvider;
        this.createGooogleUserProvider = createGooogleUserProvider;
    }
    async createUser(createUserDto) {
        return await this.createUserProvider.createUser(createUserDto);
    }
    async find(getUsersParamDto) {
        return this.usersRepository.find({
            where: getUsersParamDto,
        });
    }
    async findOneById(id) {
        let user = undefined;
        try {
            user = await this.usersRepository.findOneBy({
                id,
            });
        }
        catch (error) {
            throw new common_1.RequestTimeoutException('Unable to process your request at the moment please try later', {
                description: 'Error connecting to the the datbase',
            });
        }
        if (!user) {
            throw new common_1.BadRequestException('The user id does not exist');
        }
        return user;
    }
    async createMany(createManyUsersDto) {
        return await this.usersCreateManyProvider.createMany(createManyUsersDto);
    }
    async findOneByEmail(email) {
        return await this.findOneUserByEmailProvider.findOneByEmail(email);
    }
    async findOneByGoogleId(googleId) {
        return await this.findOneByGoogleIdProvider.findOneByGoogleId(googleId);
    }
    async createGoogleUser(googleUser) {
        return await this.createGooogleUserProvider.createGoogleUser(googleUser);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_create_many_provider_1.UsersCreateManyProvider,
        create_user_provider_1.CreateUserProvider,
        find_one_user_by_email_provider_1.FindOneUserByEmailProvider,
        find_one_by_google_id_provider_1.FindOneByGoogleIdProvider,
        create_google_user_provider_1.CreateGoogleUserProvider])
], UsersService);
//# sourceMappingURL=users.service.js.map
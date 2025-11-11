"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchUserDto = void 0;
const create_user_dto_1 = require("./create-user.dto");
const swagger_1 = require("@nestjs/swagger");
class PatchUserDto extends (0, swagger_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.PatchUserDto = PatchUserDto;
//# sourceMappingURL=patch-user.dto.js.map
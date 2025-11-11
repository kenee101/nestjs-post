"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFile = ApiFile;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function ApiFile() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'The file to upload (PNG, JPG, JPEG, PDF up to 5MB)',
                },
            },
        },
    }));
}
//# sourceMappingURL=api-file.decorator.js.map
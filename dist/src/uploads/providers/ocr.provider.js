"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcrProvider = void 0;
const Tesseract = require("tesseract.js");
const common_1 = require("@nestjs/common");
let OcrProvider = class OcrProvider {
    async extractTextFromImage(imagePath) {
        try {
            const { data: { text }, } = await Tesseract.recognize(imagePath, 'eng', {
                logger: (m) => console.log(m),
            });
            return text.trim();
        }
        catch (error) {
            console.error('OCR Error:', error);
            throw new Error('Failed to process image with OCR');
        }
    }
};
exports.OcrProvider = OcrProvider;
exports.OcrProvider = OcrProvider = __decorate([
    (0, common_1.Injectable)()
], OcrProvider);
//# sourceMappingURL=ocr.provider.js.map
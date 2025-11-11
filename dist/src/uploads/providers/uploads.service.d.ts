import { ConfigService } from '@nestjs/config';
import { OcrProvider } from './ocr.provider';
type UploadedFile = {
    filename: string;
    path: string;
    mimeType: string;
    size: number;
    textContent?: string;
};
export declare class UploadsService {
    private readonly configService;
    private readonly ocrProvider;
    private readonly uploadDir;
    constructor(configService: ConfigService, ocrProvider: OcrProvider);
    uploadFile(file: Express.Multer.File): Promise<UploadedFile>;
}
export {};

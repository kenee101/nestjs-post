import { UploadsService } from './providers/uploads.service';
export declare class UploadsController {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    uploadFile(file: Express.Multer.File): Promise<{
        filename: string;
        path: string;
        mimeType: string;
        size: number;
        textContent?: string;
    }>;
}

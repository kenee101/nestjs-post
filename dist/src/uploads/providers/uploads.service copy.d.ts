import { ConfigService } from '@nestjs/config';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { Upload } from '../upload.entity';
import { Repository } from 'typeorm';
export declare class UploadsService {
    private readonly uploadToAwsProvider;
    private readonly configService;
    private uploadsRepository;
    constructor(uploadToAwsProvider: UploadToAwsProvider, configService: ConfigService, uploadsRepository: Repository<Upload>);
    uploadFile(file: Express.Multer.File): Promise<Upload>;
}

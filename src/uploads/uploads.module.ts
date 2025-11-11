import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upload } from './upload.entity';
import { UploadToAwsProvider } from './providers/upload-to-aws.provider';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './providers/uploads.service';
import { OcrProvider } from './providers/ocr.provider';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, UploadToAwsProvider, OcrProvider],
  imports: [TypeOrmModule.forFeature([Upload])],
})
export class UploadsModule {}

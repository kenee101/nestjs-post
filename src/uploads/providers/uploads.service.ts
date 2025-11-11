import { ConfigService } from '@nestjs/config';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { createWriteStream, existsSync, mkdirSync, unlinkSync } from 'fs';
import { join } from 'path';
// import { v4 as uuidv4 } from 'uuid';
import { OcrProvider } from './ocr.provider';
import { promises as fs } from 'fs';

type UploadedFile = {
  filename: string;
  path: string;
  mimeType: string;
  size: number;
  textContent?: string;
};

// Define allowed file types
const ALLOWED_FILE_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'application/pdf',
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

@Injectable()
export class UploadsService {
  private readonly uploadDir: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly ocrProvider: OcrProvider,
  ) {
    // Create uploads directory if it doesn't exist
    // this.uploadDir = join(process.cwd(), 'uploads/folder');
    this.uploadDir = join(__dirname, '..', '..', 'uploads', 'folder');
    if (!existsSync(this.uploadDir)) {
      mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  // private generateUniqueFilename(originalname: string): string {
  //   const ext = originalname.split('.').pop();
  //   return `${uuidv4()}.${ext}`;
  // }

  public async uploadFile(file: Express.Multer.File): Promise<UploadedFile> {
    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(file.mimetype)) {
      throw new BadRequestException(
        `Invalid file type. Allowed types: ${ALLOWED_FILE_TYPES.join(', ')}`,
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      throw new BadRequestException(
        `File too large. Maximum size: ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
      );
    }

    // const filename = this.generateUniqueFilename(file.originalname);
    const filename = 'test-image-1.jpg';
    const filePath = join(this.uploadDir, filename);

    try {
      // Save file locally
      // await new Promise<void>((resolve, reject) => {
      //   const writeStream = createWriteStream(filePath);
      //   writeStream.write(file.buffer);
      //   writeStream.on('error', (error) => {
      //     console.error('File write error:', error);
      //     unlinkSync(filePath); // Clean up if there's an error
      //     reject(new InternalServerErrorException('Failed to save file'));
      //   });
      //   writeStream.on('finish', () => resolve());
      // });
      await fs.writeFile(filePath, file.buffer);

      // Process with OCR if it's an image
      let textContent: string | undefined;
      if (file.mimetype.startsWith('image/')) {
        try {
          textContent = await this.ocrProvider.extractTextFromImage(filePath);
        } catch (error) {
          console.error(
            'OCR processing failed, continuing without text extraction:',
            error,
          );
        }
      }

      return {
        filename,
        path: filePath,
        mimeType: file.mimetype,
        size: file.size,
        textContent,
      };
    } catch (error) {
      // Clean up file if something went wrong
      if (existsSync(filePath)) {
        unlinkSync(filePath);
      }
      throw new InternalServerErrorException('Failed to process file');
    }
  }
}

import * as Tesseract from 'tesseract.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OcrProvider {
  async extractTextFromImage(imagePath: string): Promise<string> {
    try {
      const {
        data: { text },
      } = await Tesseract.recognize(imagePath, 'eng', {
        logger: (m: any) => console.log(m),
      });
      // console.log('text', text);
      return text.trim();
    } catch (error) {
      console.error('OCR Error:', error);
      throw new Error('Failed to process image with OCR');
    }
  }
}

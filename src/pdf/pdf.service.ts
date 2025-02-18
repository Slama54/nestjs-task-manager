import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
  async generateTaskPdf(): Promise<string> {
    const outputDir = path.resolve(__dirname, '../../generated'); // ✅ Set directory path
    const filePath = path.join(outputDir, 'sample_task.pdf'); // ✅ Create full file path

    // ✅ Ensure the directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true }); // ✅ Create folder if missing
    }

    const doc = new PDFDocument();
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // ✅ Add Static Task Details
    doc.fontSize(18).text('Task Details', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Title: Sample Task`);
    doc.fontSize(14).text(`Description: This is a test task with static data.`);
    doc.fontSize(14).text(`Status: Pending`);
    doc.fontSize(12).text(`Created At: 2025-02-07T12:00:00Z`);

    doc.end();

    return new Promise((resolve, reject) => {
      stream.on('finish', () => resolve(filePath));
      stream.on('error', reject);
    });
  }
}

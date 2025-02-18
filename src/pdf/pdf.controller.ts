/* eslint-disable prettier/prettier */
import { Controller, Get, Res } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { Response } from 'express';
import * as fs from 'fs';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('static')
  async getStaticTaskPdf(@Res() res: Response) {
    const filePath = await this.pdfService.generateTaskPdf();

    // Send the generated PDF file as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=sample_task.pdf`);

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  }
}

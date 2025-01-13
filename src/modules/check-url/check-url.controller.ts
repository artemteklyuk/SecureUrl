import { Body, Controller, Post } from '@nestjs/common';
import { CheckUrlService } from './check-url.service';
import { RemoteApi } from 'src/core/database/entities';
import { ScanRequestDto } from './DTO/Request/scan-request.dto.ts';

@Controller('scanner')
export class CheckUrlController {
  constructor(private readonly checkUrlService: CheckUrlService) {}

  @Post('scan-url')
  private async scanUrl(@Body() body: ScanRequestDto) {
    const result = await this.checkUrlService.scanUrl(body.url, body.scanOptions);
    return result;
  }
}

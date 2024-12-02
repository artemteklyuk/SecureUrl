import { Body, Controller, Post } from '@nestjs/common';
import { CheckUrlService } from './check-url.service';
import { RemoteApi } from 'src/core/database/entities';

@Controller('scanner')
export class CheckUrlController {
  constructor(private readonly checkUrlService: CheckUrlService) {}

  @Post('scan-url')
  private async scanUrl(@Body() body: { url: string}) {
    const result = await this.checkUrlService.scanUrl(body.url);
    return result;
  }
}

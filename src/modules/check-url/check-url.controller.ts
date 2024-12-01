import { Body, Controller, Post } from '@nestjs/common';
import { CheckUrlService } from './check-url.service';

@Controller('scanner')
export class CheckUrlController {
  constructor(private readonly checkUrlService: CheckUrlService) {}

  @Post('scan-url')
  private async scanUrl(@Body() body: { url: string }) {
    const result = this.checkUrlService.scanUrl(body.url);
    console.log(result);
    return result;
  }
}

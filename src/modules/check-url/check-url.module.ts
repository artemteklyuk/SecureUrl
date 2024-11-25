import { Module } from '@nestjs/common';
import { CheckUrlService } from './check-url.service';
import { CheckUrlController } from './check-url.controller';

@Module({
  providers: [CheckUrlService],
  controllers: [CheckUrlController]
})
export class CheckUrlModule {}

import { Module } from '@nestjs/common';
import { CheckUrlService } from './check-url.service';
import { CheckUrlController } from './check-url.controller';
import { ApiManagerModule } from '../api-manager/api-manager.module';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [ApiManagerModule, HttpModule],
  providers: [CheckUrlService],
  controllers: [CheckUrlController],
})
export class CheckUrlModule {}

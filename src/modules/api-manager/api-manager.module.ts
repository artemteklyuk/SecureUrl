import { Module } from '@nestjs/common';
import { ApiManagerService } from './api-manager.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiManagerController } from './api-manager.controller';
import { RemoteApi } from 'src/core/database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([RemoteApi])],
  providers: [ApiManagerService],
  controllers: [ApiManagerController],
})
export class ApiManagerModule {}

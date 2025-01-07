import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export type UrlsStatus = 'clear' | 'warning' | 'danger';
export enum urlStatus {
  CLEAR = 'clear',
  WARNING = 'warning',
  DANGER = 'danger',
}

export class ScanResult {
  @ApiProperty({
    description: 'статус проверки сайта',
    enum: urlStatus,
  })
  @IsString()
  public status: UrlsStatus;
}

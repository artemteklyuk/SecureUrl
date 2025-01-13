import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ScanOptions } from '../../types/scan-options.type';

export class ScanRequestDto {
  @ApiProperty({ description: 'Url для проверки' })
  @IsString()
  public url: string;

  @ApiProperty({ description: 'Опции проверки' })
  public scanOptions: ScanOptions;
}

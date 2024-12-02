import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ScanResult {
  @ApiProperty({
    description: 'ответ заглушка',
    example: '2435432-fdsf-sgdsg-cvx-sgs-cxvLPF<FPW<P$',
  })
  @IsString()
  public message: string;
}

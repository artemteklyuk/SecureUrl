import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { SCAN_RESOURCES_NAMES } from 'src/core/consts';

export class AddNewResourceApiDto {
  @ApiProperty({ description: 'API ключ ресурса', example: '2435432-fdsf-sgdsg-cvx-sgs-cxvLPF<FPW<P$' })
  @IsString()
  public apiKey: string;

  @ApiProperty({ description: 'Название ресурса', example: 'Virus Total' })
  @IsString()
  public serviceName: SCAN_RESOURCES_NAMES;

  @ApiProperty({ description: 'Endpoint для запроса на проверку', example: 'https://virustotal/check-url' })
  @IsString()
  public requestUrl: string;

  @ApiProperty({ description: 'Метод запроса', example: 'Get' })
  @IsString()
  public checkApiMethod: string;

  @ApiProperty({ description: 'Максимальное количество запросов к Api в день', example: 100 })
  @IsNumber()
  public dayRequestLimit?: number;

  @ApiProperty({ description: 'Максимальное количество запросов к Api в минуту', example: 5 })
  @IsNumber()
  public minuteRequestLimit?: number;
}

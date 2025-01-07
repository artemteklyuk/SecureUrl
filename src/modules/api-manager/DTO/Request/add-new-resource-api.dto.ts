import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { SCAN_RESOURCES_NAMES } from 'src/core/consts';
import { apiMethods } from 'src/core/types/apiScanner.type';

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

  @ApiProperty({ description: 'Метод запроса', example: 'post' })
  @IsString()
  public requestUrlMethod: apiMethods;

  @ApiProperty({ description: 'Endpoint для получения результата проверки', example: 'https://virustotal/get-result' })
  @IsString()
  resultUrl: string;

  @ApiProperty({ description: 'Метод запроса', example: 'get' })
  @IsString()
  resultUrlMethod: apiMethods;

  @ApiProperty({ description: 'Максимальное количество запросов к Api в день', example: 100 })
  @IsNumber()
  public dayRequestLimit?: number;

  @ApiProperty({ description: 'Максимальное количество запросов к Api в минуту', example: 5 })
  @IsNumber()
  public minuteRequestLimit?: number;
}

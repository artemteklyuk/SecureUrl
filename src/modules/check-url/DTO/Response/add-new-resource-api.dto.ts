import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddNewResourceApiDto {
  @ApiProperty({
    description: 'API ключ ресурса',
    example: '2435432-fdsf-sgdsg-cvx-sgs-cxvLPF<FPW<P$',
  })
  @IsString()
  public apiKey: string;

  @ApiProperty({ description: 'Название ресурса', example: 'Virus Total' })
  @IsString()
  public resourceName: string;

  @ApiProperty({
    description: 'Endpoint для запроса на проверку',
    example: 'https://virustotal/check-url',
  })
  @IsString()
  public checkApiEndpoint: string;

  @ApiProperty({ description: 'Метод запроса', example: 'Get' })
  @IsString()
  public checkApiMethod: string;

  @ApiProperty({
    description: 'Максимальное количество запросов к Api в день',
    example: 100,
  })
  @IsNumber()
  public dayRequestLimit?: number;
}

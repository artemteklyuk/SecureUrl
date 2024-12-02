import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { AddNewResourceApiDto } from './DTO/Request/add-new-resource-api.dto';
import { ApiManagerService } from './api-manager.service';

@Controller('api-manager')
export class ApiManagerController {
  constructor(private readonly apiManagerService: ApiManagerService) {}

  @Post('add-new-resource-api')
  public async addNewResourceApi(@Body() body: AddNewResourceApiDto) {
    console.log(body);
    return await this.apiManagerService.addNewApi(body);
  }

  @Delete('delete-resource-api')
  private async deleteResourceApi(@Query('apiKey') apiKey: string) {
    return await this.apiManagerService.deleteApi(apiKey);
  }
}

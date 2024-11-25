import { Body, Controller, Post } from '@nestjs/common';
import { AddNewResourceApiDto } from './DTO/Request/add-new-resource-api.dto';

@Controller('api-manager')
export class ApiManagerController {

    @Post('add-new-resource-api')
    private async addNewResourceApi(@Body() body: AddNewResourceApiDto) {

    }
}

import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RemoteApi } from 'src/core/database/entities';
import { DeleteResult, IsNull, LessThan, Not, Repository } from 'typeorm';
import { AddNewResourceApiDto } from './DTO/Request';
import { ApiScanner } from 'src/core/types/apiScanner.type';

@Injectable()
export class ApiManagerService {
  constructor(
    @InjectRepository(RemoteApi)
    private readonly remoteApiRepository: Repository<RemoteApi>,
  ) {}

  public async addNewApi({
    apiKey,
    serviceName,
    requestUrl,
    checkApiMethod,
    dayRequestLimit,
    minuteRequestLimit,
  }: AddNewResourceApiDto): Promise<RemoteApi> {
    const apiService = await this.remoteApiRepository.existsBy({
      apiKey,
    });

    if (apiService) {
      throw new ConflictException('Service already exists');
    }

    const newApiService = this.remoteApiRepository.create({
      apiKey,
      serviceName,
      requestUrl,
      checkApiMethod,
      dayRequestLimit,
      minuteRequestLimit,
      isWorkingApi: true,
    });

    await this.remoteApiRepository.insert(newApiService);

    return newApiService;
  }

  public async deleteApi(apiKey: string): Promise<DeleteResult> {
    const apiService = await this.remoteApiRepository.existsBy({
      apiKey,
    });

    if (!apiService) {
      throw new NotFoundException('Service not found');
    }

    return await this.remoteApiRepository.delete({
      apiKey,
    });
  }

  public async getScannerApi(_options?): Promise<ApiScanner> {
    const apiScannerInfo = await this.remoteApiRepository.findOne({
      where: {
        expirationDate: IsNull(),
      },
    });
    if (!apiScannerInfo){
      throw new NotFoundException()
    }
    return {
      apiKey: apiScannerInfo.apiKey,
      checkApiMethod: apiScannerInfo.checkApiMethod,
      requestUrl: apiScannerInfo.requestUrl,
      serviceName: apiScannerInfo.serviceName
    };
  }
}

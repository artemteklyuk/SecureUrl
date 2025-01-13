import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Equal, IsNull, LessThan, Not, Repository } from 'typeorm';
import { AddNewResourceApiDto } from './DTO/Request';
import { ScanOptions } from '../check-url/types/scan-options.type';
import { RemoteApi } from '../../core/database/entities/remote-api.entity';
import { ApiScanner } from '../../core/types/apiScanner.type';
import { SCAN_RESOURCES_NAMES } from '../../core/consts';

@Injectable()
export class ApiManagerService {
  constructor(
    @InjectRepository(RemoteApi)
    private readonly remoteApiRepository: Repository<RemoteApi>
  ) {}

  public async addNewApi({
    apiKey,
    serviceName,
    requestUrl,
    requestUrlMethod,
    resultUrl,
    resultUrlMethod,
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
      requestUrlMethod,
      resultUrl,
      resultUrlMethod,
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

  public async getScannerApi(scanOptions: ScanOptions): Promise<ApiScanner> {
    const apiScannerInfo = await this.remoteApiRepository.findOne({
      where: {
        expirationDate: IsNull(),
        serviceName: SCAN_RESOURCES_NAMES.URL_SCAN_IO,
      },
    });
    if (!apiScannerInfo) {
      throw new NotFoundException();
    }
    return {
      apiKey: apiScannerInfo.apiKey,
      resultUrl: apiScannerInfo.resultUrl,
      resultUrlMethod: apiScannerInfo.resultUrlMethod,
      requestUrlMethod: apiScannerInfo.requestUrlMethod,
      requestUrl: apiScannerInfo.requestUrl,
      serviceName: apiScannerInfo.serviceName,
    };
  }
}

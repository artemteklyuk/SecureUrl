import { Injectable } from '@nestjs/common';
import { ApiManagerService } from '../api-manager/api-manager.service';
import { HttpService } from '@nestjs/axios';
import { RECOURSE_REQUEST_STRATEGIES, SCAN_RESOURCES_NAMES } from 'src/core/consts';
import { IRequestStrategy } from './types/request.strategy.interface';

@Injectable()
export class CheckUrlService {
  constructor(
    private readonly apiManagerService: ApiManagerService,
    private readonly httpService: HttpService
  ) {}

  public scanUrlInstance(resourceName: string): IRequestStrategy {
    const ScanUrlClass = RECOURSE_REQUEST_STRATEGIES[resourceName];

    if (!ScanUrlClass) {
      throw new Error(`Not found strategy for site: ${resourceName}`);
    }

    return new ScanUrlClass();
  }
  public async scanUrl(url: string) {
    const checkUrlApi = await this.apiManagerService.getScannerApi();

    switch (checkUrlApi.serviceName) {
      case SCAN_RESOURCES_NAMES.VIRUSTOTAL: {
        const scanUrlInstance = this.scanUrlInstance(SCAN_RESOURCES_NAMES.VIRUSTOTAL);
        const report = await scanUrlInstance.makeRequest(url, checkUrlApi);
        return report;
      }
      case SCAN_RESOURCES_NAMES.CYMON: {
        const scanUrlInstance = this.scanUrlInstance(SCAN_RESOURCES_NAMES.CYMON);
        const report = await scanUrlInstance.makeRequest(url, checkUrlApi);
        return report;
      }
      case SCAN_RESOURCES_NAMES.GOOGLE_SAFE_BROWSING: {
        const scanUrlInstance = this.scanUrlInstance(SCAN_RESOURCES_NAMES.GOOGLE_SAFE_BROWSING);
        const report = await scanUrlInstance.makeRequest(url, checkUrlApi);
        return report;
      }
      case SCAN_RESOURCES_NAMES.KASPERSKY_MALWAREBYTES_THREAT_INTELLIGENCE: {
        const scanUrlInstance = this.scanUrlInstance(SCAN_RESOURCES_NAMES.KASPERSKY_MALWAREBYTES_THREAT_INTELLIGENCE);
        const report = await scanUrlInstance.makeRequest(url, checkUrlApi);
        return report;
      }
      case SCAN_RESOURCES_NAMES.URL_SCAN_IO: {
        const scanUrlInstance = this.scanUrlInstance(SCAN_RESOURCES_NAMES.URL_SCAN_IO);
        const report = await scanUrlInstance.makeRequest(url, checkUrlApi);
        return report;
      }
      case SCAN_RESOURCES_NAMES.WEBROOT_BRIGHT_CLOUD: {
        const scanUrlInstance = this.scanUrlInstance(SCAN_RESOURCES_NAMES.WEBROOT_BRIGHT_CLOUD);
        const result = await scanUrlInstance.makeRequest(url, checkUrlApi);
        return result;
      }
      default:
        break;
    }
  }
}

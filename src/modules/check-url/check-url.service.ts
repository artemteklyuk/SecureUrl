import { Injectable } from '@nestjs/common';
import { ApiManagerService } from '../api-manager/api-manager.service';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CheckUrlService {
  constructor(
    private readonly apiManagerService: ApiManagerService,
    private readonly httpService: HttpService,
  ) {}
  public async scanUrl(url: string) {
    const apiData = await this.apiManagerService.getScannerApi();
    if (apiData.apiKey && apiData.requestUrl) {
      if (apiData.checkApiMethod) {
        const result = this.httpService[apiData.checkApiMethod].get(apiData.requestUrl, {});
        return result;
      }
      const result = this.httpService.get(apiData.requestUrl, {});
      return result;
    }
  }
}

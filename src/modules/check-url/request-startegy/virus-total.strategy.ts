import axios, { AxiosResponse } from 'axios';
import { ApiScanner } from 'src/core/types/apiScanner.type';
import { IRequestStrategy } from '../types/request.strategy.interface';
import { VirusTotalData, VirusTotalResultData } from '../types/virus-total-api.types';
import { urlStatus } from '../DTO/Response';
import { setTimeout as wait } from 'timers/promises';

export class VirusTotalStrategy implements IRequestStrategy {
  public async makeRequest(url: string, checkUrlApi: ApiScanner) {
    const { data: requestData }: AxiosResponse<VirusTotalData> = await axios[checkUrlApi.requestUrlMethod](
      checkUrlApi.requestUrl,
      {},
      {
        headers: {
          'x-apikey': checkUrlApi.apiKey,
          'content-type': 'application/x-www-form-urlencoded',
        },
        params: {
          url,
        },
      }
    );
    let waitResults = true;
    let result;
    while (waitResults) {
      await wait(1500);
      const { data }: AxiosResponse<VirusTotalResultData> = await axios[checkUrlApi.resultUrlMethod](
        requestData.data.links.self,
        {
          headers: {
            'x-apikey': checkUrlApi.apiKey,
          },
        }
      );
      result = data;
      if (result.data.attributes.status !== 'queued') {
        waitResults = false;
      }
    }

    const { stats: resultData } = result.data.attributes;
    if (resultData.malicious > 0) {
      return { status: urlStatus.DANGER };
    }
    if (resultData.suspicious > 0) {
      return { status: urlStatus.WARNING };
    }
    return { status: urlStatus.CLEAR };
  }
}

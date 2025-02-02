import axios, { Axios, AxiosResponse } from 'axios';
import { ApiScanner } from 'src/core/types/apiScanner.type';
import { IRequestStrategy } from '../types/request.strategy.interface';
import { UrlScanIoData, UrlScanIoResultData } from '../types/virus-total-api.types';
import { urlStatus } from '../DTO/Response';
import { setTimeout as wait } from 'timers/promises';

export class UrlScanIoStrategy implements IRequestStrategy {
  public async makeRequest(url: string, checkUrlApi: ApiScanner) {
    try {
      const { data: requestData }: AxiosResponse<UrlScanIoData> = await axios[checkUrlApi.requestUrlMethod](
        checkUrlApi.requestUrl,
        { url, visibility: 'public' },
        {
          headers: {
            'API-Key': checkUrlApi.apiKey,
            'content-type': 'application/json',
            visibility: 'public',
          },
        }
      );

      let waitResults = true;
      let secureScore;
      while (waitResults) {
        try {
          await wait(5000);
          const { data }: AxiosResponse<UrlScanIoResultData> = await axios[checkUrlApi.resultUrlMethod](
            requestData.api,
            {
              headers: {
                'API-Key': checkUrlApi.apiKey,
              },
            }
          );
          secureScore = data.stats.securePercentage;
          if (data) {
            waitResults = false;
          }
          console.log(waitResults);
        } catch (error) {}
      }
      console.log(secureScore);
      if (secureScore > 80) {
        return { status: urlStatus.CLEAR };
      }
      if (secureScore <= 80 && secureScore > 60) {
        return { status: urlStatus.WARNING };
      }
      return { status: urlStatus.DANGER };
    } catch (error) {
      console.log(error);
      return { status: urlStatus.WARNING };
    }
  }
}

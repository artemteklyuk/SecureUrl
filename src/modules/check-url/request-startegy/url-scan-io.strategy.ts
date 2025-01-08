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
      let result;
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
          result = data;
          if (data) {
            waitResults = false;
          }
          console.log(data.verdicts);
        } catch (error) {}
      }

      return { status: urlStatus.CLEAR };
    } catch (error) {
      console.log(error);
      return { status: urlStatus.WARNING };
    }
  }
}

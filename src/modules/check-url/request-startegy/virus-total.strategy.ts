import axios from 'axios';
import { ApiScanner } from 'src/core/types/apiScanner.type';
import { IRequestStrategy } from '../types/request.strategy.interface';

export class VirusTotalStrategy implements IRequestStrategy {
  public async makeRequest(url: string, checkUrlApi: ApiScanner) {
    const { data } = await axios[checkUrlApi.checkApiMethod](
      checkUrlApi.requestUrl,
      { url },
      {
        headers: {
          'x-apikey': checkUrlApi.apiKey,
          'content-type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return data;
  }
}

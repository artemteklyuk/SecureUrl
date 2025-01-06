import axios from 'axios';
import { ApiScanner } from 'src/core/types/apiScanner.type';
import { IRequestStrategy } from '../types/request.strategy.interface';

export class UrlScanIoStrategy implements IRequestStrategy {
  public async makeRequest(url: string, checkUrlApi: ApiScanner) {
    const { data } = await axios.post(
      checkUrlApi.requestUrl,
      { url, visibility: 'public' },
      {
        headers: {
          'API-Key': checkUrlApi.apiKey,
          'content-type': 'application/json',
        },
      }
    );
    return data;
  }
}

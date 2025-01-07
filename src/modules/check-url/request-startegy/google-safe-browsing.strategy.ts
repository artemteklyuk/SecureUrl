import axios from 'axios';
import { ApiScanner } from 'src/core/types/apiScanner.type';
import { IRequestStrategy } from '../types/request.strategy.interface';
import { urlStatus } from '../DTO/Response';

export class GoogleSafeBrowsingStrategy implements IRequestStrategy {
  public async makeRequest(url: string, checkUrlApi: ApiScanner) {
    return { status: urlStatus.CLEAR };

  }
}

import { ApiScanner } from 'src/core/types/apiScanner.type';
import { ScanResult } from '../DTO/Response';

export interface IRequestStrategy {
  makeRequest: (url: string, checkUrlApi: ApiScanner) => Promise<ScanResult>;
}

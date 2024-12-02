import { SCAN_RESOURCES_NAMES } from '../consts';

export type ApiScanner = {
  apiKey: string;
  requestUrl: string;
  checkApiMethod: string;
  serviceName: SCAN_RESOURCES_NAMES;
};

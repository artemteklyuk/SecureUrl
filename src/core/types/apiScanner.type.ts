import { SCAN_RESOURCES_NAMES } from '../consts';

export type ApiScanner = {
  apiKey: string;
  requestUrl: string;
  requestUrlMethod: string;
  resultUrl: string;
  resultUrlMethod: string;
  serviceName: SCAN_RESOURCES_NAMES;
};

export type apiMethods = 'get' | 'post' | 'put' | 'patch' | 'delete';

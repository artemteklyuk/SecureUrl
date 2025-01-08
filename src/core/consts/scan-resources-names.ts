import {
  CymonStrategy,
  GoogleSafeBrowsingStrategy,
  KasperskyMalwarebytesThreatIntelligenceStrategy,
  UrlScanIoStrategy,
  VirusTotalStrategy,
  WebrootBrightCloudStrategy,
} from 'src/modules/check-url/request-startegy';

export enum SCAN_RESOURCES_NAMES {
  GOOGLE_SAFE_BROWSING = 'google-safe-browsing',
  CYMON = 'cymon',
  KASPERSKY_MALWAREBYTES_THREAT_INTELLIGENCE = 'kaspersky-malwarebytes-threat-intelligence',
  URL_SCAN_IO = 'url-scan-io',
  VIRUSTOTAL = 'virus-total',
  WEBROOT_BRIGHT_CLOUD = 'webroot-bright-cloud',
}

export const RECOURSE_REQUEST_STRATEGIES = {
  [SCAN_RESOURCES_NAMES.VIRUSTOTAL]: VirusTotalStrategy,
  [SCAN_RESOURCES_NAMES.CYMON]: CymonStrategy,
  [SCAN_RESOURCES_NAMES.GOOGLE_SAFE_BROWSING]: GoogleSafeBrowsingStrategy,
  [SCAN_RESOURCES_NAMES.KASPERSKY_MALWAREBYTES_THREAT_INTELLIGENCE]: KasperskyMalwarebytesThreatIntelligenceStrategy,
  [SCAN_RESOURCES_NAMES.WEBROOT_BRIGHT_CLOUD]: WebrootBrightCloudStrategy,
  [SCAN_RESOURCES_NAMES.URL_SCAN_IO]: UrlScanIoStrategy,
};

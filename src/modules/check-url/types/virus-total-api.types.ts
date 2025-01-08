export type VirusTotalData = {
  data: {
    type: string;
    id: string;
    links: {
      self: string;
    };
  };
};

export type VirusTotalResultData = {
  data: {
    attributes: {
      status: string | undefined;
      stats: {
        malicious: number;
        suspicious: number;
        undetected: number;
        harmless: number;
        timeout: number;
      };
    };
  };
};

export type UrlScanIoData = {
  message: string;
  uuid: string;
  result: string;
  api: string;
  visibility: string;
  options: object;
  url: string;
};

export type UrlScanIoResultData = {
  verdicts: {
    overall: {
      score: number;
      categories: Array<any>;
    };
    urlscan: {
      score: number;
      categories: Array<any>;
    };
    engines: {
      score: number;
      categories: Array<any>;
    };
    community: {
      score: number;
      categories: Array<any>;
    };
  };
};

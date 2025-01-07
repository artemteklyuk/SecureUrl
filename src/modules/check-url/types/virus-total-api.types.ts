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

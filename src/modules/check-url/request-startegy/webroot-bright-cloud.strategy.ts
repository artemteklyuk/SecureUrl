import axios from 'axios';
import { ApiScanner } from 'src/core/types/apiScanner.type';
import { IRequestStrategy } from '../types/request.strategy.interface';
import { HttpException } from '@nestjs/common';

export class WebrootBrightCloudStrategy implements IRequestStrategy {
  public async makeRequest(url: string, checkUrlApi: ApiScanner) {
    throw new Error('no inplemented');
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RemoteApi } from 'src/core/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ApiManagerService {
  constructor(
    @InjectRepository(RemoteApi)
    private readonly remoteApiRepository: Repository<RemoteApi>,
  ) {}
}

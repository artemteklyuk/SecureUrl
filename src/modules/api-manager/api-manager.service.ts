import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RemoteApiServiceEntity } from 'src/core/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ApiManagerService {
  constructor(
    @InjectRepository(RemoteApiServiceEntity)
    private readonly remoteApiRepository: Repository<RemoteApiServiceEntity>,
  ) {}
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('remote_api_entity')
export class CheckedUrl extends BaseEntity {
  @Column({ name: 'base_url', type: 'varchar' })
  apiKey: string;

  @Column({ name: 'verdict', type: 'varchar' })
  serviceName: string;

  @Column({ name: 'url', type: 'varchar' })
  isWorkingApi: boolean;

  @Column({ name: 'check_resource', type: 'varchar' })
  checkResource: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('remote_api_entity')
export class RemoteApiServiceEntity extends BaseEntity {
  @Column({ name: 'api_key', type: 'varchar' })
  apiKey: string;

  @Column({ name: 'service_name', type: 'varchar' })
  serviceName: string;

  @Column({ name: 'is_working_bot_filler', type: 'boolean' })
  isWorkingApi: boolean;
}

import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CheckResult } from './check-result.entity';

@Entity('remote_api')
export class RemoteApi extends BaseEntity {
  @Column({ name: 'api_key', type: 'varchar' })
  apiKey: string;

  @Column({ name: 'is_working_api', type: 'boolean' })
  isWorkingApi: boolean;

  @Column({ name: 'service_name', type: 'varchar' })
  serviceName: string;

  @OneToMany(() => CheckResult, (checkResult) => checkResult.remoteApi)
  @JoinColumn({ name: 'id', referencedColumnName: 'remote_api_id' })
  checkResult: CheckResult[];
}

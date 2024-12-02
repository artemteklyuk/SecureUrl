import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CheckResult } from './check-result.entity';
import { SCAN_RESOURCES_NAMES } from 'src/core/consts';

@Entity('remote_api')
export class RemoteApi extends BaseEntity {
  @Column({ name: 'api_key', type: 'varchar' })
  apiKey: string;

  @Column({ name: 'service_name', type: 'varchar' })
  serviceName: SCAN_RESOURCES_NAMES;

  @Column({ name: 'request_url', type: 'varchar' })
  requestUrl: string;

  @Column({ name: 'check_api_Method', type: 'varchar' })
  checkApiMethod: string;

  @Column({ name: 'day_request_limit', type: 'integer', nullable: true })
  dayRequestLimit?: number;

  @Column({ name: 'minute_request_limit', type: 'integer', nullable: true })
  minuteRequestLimit?: number;

  @Column({ name: 'is_working_api', type: 'boolean' })
  isWorkingApi: boolean;

  @Column({ name: 'expiration_date', type: 'date', nullable: true })
  expirationDate?: Date;

  @OneToMany(() => CheckResult, (checkResult) => checkResult.remoteApi)
  @JoinColumn({ name: 'id', referencedColumnName: 'remote_api_id' })
  checkResult: CheckResult[];
}

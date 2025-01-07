import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CheckResult } from './check-result.entity';
import { SCAN_RESOURCES_NAMES } from 'src/core/consts';
import { apiMethods } from 'src/core/types/apiScanner.type';

@Entity('remote_api')
export class RemoteApi extends BaseEntity {
  @Column({ name: 'api_key', type: 'varchar' })
  apiKey: string;

  @Column({ name: 'service_name', type: 'varchar' })
  serviceName: SCAN_RESOURCES_NAMES;

  @Column({ name: 'request_url', type: 'varchar' })
  requestUrl: string;

  @Column({ name: 'request_url_method', type: 'varchar' })
  requestUrlMethod: apiMethods;

  @Column({ name: 'result_url', type: 'varchar' })
  resultUrl: string;

  @Column({ name: 'result_url_method', type: 'varchar' })
  resultUrlMethod: apiMethods;

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

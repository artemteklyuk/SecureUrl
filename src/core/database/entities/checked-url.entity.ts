import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CheckResult } from './check-result.entity';

@Entity('checked-url')
export class CheckedUrl extends BaseEntity {
  @Column({ name: 'base_url', type: 'varchar' })
  baseUrl: string;

  @Column({ name: 'full_url', type: 'varchar' })
  fullUrl: boolean;

  @OneToMany(() => CheckResult, (checkResult) => checkResult.checkedUrl)
  @JoinColumn({ name: 'id', referencedColumnName: 'checked_url_id' })
  checkResult: CheckResult[];
}

import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CheckedUrl } from './checked-url.entity';
import { RemoteApi } from './remote-api.entity';

@Entity('check-result')
export class CheckResult extends BaseEntity {

  @Column({ name: 'verdict', type: 'varchar' })
  verdict: string;

  @ManyToOne(() => RemoteApi, (remoteApi) => remoteApi.checkResult)
  @JoinColumn({ name: 'remote_api_id', referencedColumnName: 'id' })
  remoteApi: RemoteApi;

  @ManyToOne(() => CheckedUrl, (checkedUrl) => checkedUrl.checkResult)
  @JoinColumn({ name: 'checked_url_id', referencedColumnName: 'id' })
  checkedUrl: CheckedUrl;
}

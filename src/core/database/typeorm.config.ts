import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const configService = new ConfigService();

export const dataSourceOptions = (config: ConfigService): DataSourceOptions => ({
  type: 'postgres',
  host: config.get('DB_HOST') || 'localhost',
  port: 5432,
  username: config.get('DB_USER') || 'root',
  password: config.get('DB_PASSWORD') || 'root',
  database: config.get('DB_NAME') || 'urlSecure',
  synchronize: false,
  dropSchema: false,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
});

export const options = () => ({
  imports: [],
  useFactory: (config: ConfigService) => dataSourceOptions(config),
  inject: [ConfigService],
});

export default new DataSource(dataSourceOptions(configService));

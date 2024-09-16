import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export interface DrizzleDatabase
  extends NodePgDatabase<Record<string, never>> {}

export const DRIZZLE = 'DRIZZLE';
export const DatabaseProvider: Provider<DrizzleDatabase> = {
  inject: [ConfigService],
  provide: DRIZZLE,
  useFactory: async (configService: ConfigService) => {
    const connectionString = configService.get<string>('DATABASE_URL');
    const pool = new Pool({ connectionString });
    await pool.connect();
    return drizzle(pool);
  },
};

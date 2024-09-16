import { ConfigModule } from '@nestjs/config';
import { defineConfig } from 'drizzle-kit';

ConfigModule.forRoot();

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/**/entities/*.entity.ts',
  out: 'migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

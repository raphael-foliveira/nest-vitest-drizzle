import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' }), TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

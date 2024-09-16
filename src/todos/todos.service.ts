import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DRIZZLE, DrizzleDatabase } from '../database/database.provider';
import { NewTodo, todos } from './entities/todo.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class TodosService {
  constructor(
    @Inject(DRIZZLE)
    private readonly db: DrizzleDatabase,
  ) {}

  async create(createTodoDto: NewTodo) {
    const [newTodo] = await this.db
      .insert(todos)
      .values(createTodoDto)
      .returning();
    return newTodo;
  }

  async findAll() {
    return await this.db.select().from(todos);
  }

  async findOne(id: number) {
    const [foundTodo] = await this.db
      .select()
      .from(todos)
      .where(eq(todos.id, id));
    if (!foundTodo) {
      throw new NotFoundException('Todo not found');
    }
    return foundTodo;
  }

  async remove(id: number) {
    return await this.db.delete(todos).where(eq(todos.id, id));
  }
}

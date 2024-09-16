import { boolean, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: varchar('title'),
  description: varchar('description'),
  completed: boolean('completed').default(false),
});

export type Todo = typeof todos.$inferSelect;
export type NewTodo = typeof todos.$inferInsert;

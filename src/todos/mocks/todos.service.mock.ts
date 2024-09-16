import { MockedClass, vi } from 'vitest';
import { TodosService } from '../todos.service';

vi.mock('../todos.service', () => ({
  TodosService: vi.fn(() => ({
    findAll: vi.fn(() => []),
    findOne: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  })),
}));

export const TodosServiceMock = TodosService as MockedClass<
  typeof TodosService
>;

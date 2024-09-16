import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { Mocked, vi } from 'vitest';
import { TodosServiceMock } from './mocks/todos.service.mock';

describe('TodosController', () => {
  let controller: TodosController;
  let todosService: Mocked<TodosService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [
        {
          provide: TodosService,
          useClass: TodosServiceMock,
        },
      ],
    }).compile();

    todosService = module.get(TodosService);
    controller = module.get<TodosController>(TodosController);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all todos', async () => {
    const expectedTodos = [
      { id: 1, title: 'Test', description: 'Test', completed: false },
    ];
    todosService.findAll.mockResolvedValue(expectedTodos);
    const todos = await controller.findAll();

    expect(todos).toEqual(expectedTodos);
  });
});

import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(3)
  readonly title: string;

  @IsString()
  @MinLength(5)
  readonly description: string;

  @IsOptional()
  readonly done: boolean;
}

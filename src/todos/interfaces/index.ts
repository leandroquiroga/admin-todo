import { Todo, Todo as TodoPrisma } from '@prisma/client';

// Components
export interface Todos {
  todos?: TodoPrisma[]
}

export interface ItemProps {
  item?: TodoPrisma
  toggleTodo: (id: string, done: boolean) => Promise<TodoPrisma>
}

export interface ErrorCreateTodo {
  path: string;
  errorOriginalValue: string;
  message: string;
  status: string;
  statusCode: number;
}


export type ResponseCreateTodo = Todo | ErrorCreateTodo;
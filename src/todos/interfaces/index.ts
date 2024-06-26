import { Todo as TodoPrisma } from '@prisma/client';

// Components
export interface Todos {
  todos?: TodoPrisma[]
}

export interface ItemProps {
  item?: TodoPrisma
  toggleTodo: (id: string, done: boolean) => Promise<TodoPrisma>
}
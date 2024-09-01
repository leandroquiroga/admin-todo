import { Todo, Todo as TodoPrisma } from '@prisma/client';

// Components
export interface Todos {
  todos?: TodoPrisma[]
}

export interface ItemProps {
  item?: TodoPrisma
  toggleTodo: (id: string, done: boolean) => Promise<TodoPrisma>
}

export interface NewTodoProps {
  todos: Todo[];
}

export interface PropsModal {
  setShowModal: (value: boolean) => void;
}
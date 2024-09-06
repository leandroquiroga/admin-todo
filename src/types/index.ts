import { Todo } from "@prisma/client";

export interface PropsSideBarItem {
  icon: React.ReactNode;
  path: string;
  title: string;
}



export interface ErrorCreateTodo {
  path: string;
  errorOriginalValue: string;
  message: string;
  status: string;
  statusCode: number;
}


export type ResponseCreateTodo = Todo | ErrorCreateTodo;
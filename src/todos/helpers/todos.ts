import { Todo } from "@prisma/client";

// TODO: Implementar para una mejor experiencia de usuario
const sleep = (second = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, second * 1000);
  });

}

export const updateTodo = async (id: string, done: boolean): Promise<Todo> => {

  const body = { done };

  const todo = await fetch(`/api/todo/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());


  return todo;
};

export const createTodo = async (description: string): Promise<Todo> => {

  const body = { description };

  const todo = await fetch(`/api/todo`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());


  return todo;
};


export const deleteTodoCompleted = async (): Promise<Todo[]> => {

  const todos = await fetch(`/api/todo`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todos;
}
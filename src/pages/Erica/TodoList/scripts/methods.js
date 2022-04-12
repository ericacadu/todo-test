export const key = 'todo-erica';
export function storage() {
  return {
    get: () => JSON.parse(localStorage.getItem(key)) || [],
    set: (value) => localStorage.setItem(key, JSON.stringify(value)),
  };
}

export function create(todoList, newTask) {
  return () => [
    {
      id: Date.now(),
      title: newTask,
      isEdit: false,
      isDone: false,
    },
    ...todoList,
  ];
}

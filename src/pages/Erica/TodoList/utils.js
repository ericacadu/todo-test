const key = 'todo-erica';

export function storage() {
  return {
    get: () => JSON.parse(localStorage.getItem(key)) || [],
    set: (value) => localStorage.setItem(key, JSON.stringify(value)),
  };
}

export const category = ['All Task', 'Progress Task', 'Done Task'];
export const data = [
  {
    id: 2,
    title: '睡飽自然醒',
    isEdit: false,
    isDone: false,
  },
  {
    id: 1,
    title: '財富自由',
    isEdit: false,
    isDone: false,
  },
  {
    id: 0,
    title: '退休',
    isEdit: false,
    isDone: false,
  },
];

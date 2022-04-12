import { TaskItem } from './';
import { useTodoList } from '../todoContext';

export function TaskList() {
  const { todoList } = useTodoList();
  return (
    <main>
      <ul className="space-y-2 tracking-widest text-slate-500">
        {todoList.map((todo) => (
          <TaskItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </main>
  );
}

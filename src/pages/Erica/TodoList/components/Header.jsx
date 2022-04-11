import { Dropdown, AddBtn } from './';
import { useHeaderContext } from '../todoContext';

export function Header() {
  const { inputRef, inputStatus, newTask, onInput, onFocus, addNewTask } = useHeaderContext();
  return (
    <header className="text-slate-20 mb-6 rounded-3xl bg-gradient-to-b from-sky-900 to-cyan-800  p-10 text-slate-100">
      <h1 className="text-2xl font-medium uppercase tracking-widest">Todo list</h1>
      <p className="mb-6 mt-2 font-light tracking-widest">Start your daily to-do task!</p>
      <div className="flex items-center">
        <Dropdown />
        <AddBtn
          newTask={newTask}
          status={inputStatus}
          inputRef={inputRef}
          onInput={onInput}
          onFocus={() => onFocus()}
          onClick={() => addNewTask()}
        />
      </div>
    </header>
  );
}

import clsx from 'clsx';
import { PlusIcon } from '../icons';
import { useTodoList } from '../todoContext';

export function InputButton() {
  const { newTask, states, onInput, addNewTask, focusIntBtn } = useTodoList();
  return (
    <div
      className={clsx(
        'input-bar group flex rounded-full text-slate-700 transition-all duration-1000 ease-in-out',
        states.intBtn ? 'w-full bg-slate-100' : 'w-0'
      )}
      onClick={focusIntBtn}
    >
      <input
        type="text"
        className={clsx(
          'bg-transparent outline-none transition-all duration-1000 ease-in-out placeholder:font-light',
          states.intBtn ? 'w-full px-5' : 'w-0'
        )}
        placeholder="Add new task"
        value={newTask}
        onInput={onInput}
      />
      <button
        type="button"
        className={clsx(
          'duration-600 flex items-center whitespace-nowrap rounded-full border-2 border-yellow-400 bg-yellow-400 py-2 text-white shadow-sm transition-all hover:border-cyan-600 hover:bg-cyan-600',
          states.intBtn ? 'px-2' : 'px-5'
        )}
        onClick={() => addNewTask()}
      >
        {!states.intBtn && <span className={clsx('pointer-events-none mr-2')}>Add Task</span>}
        <PlusIcon className="duration-600 w-5 transform transition-all group-hover:rotate-90" />
      </button>
    </div>
  );
}

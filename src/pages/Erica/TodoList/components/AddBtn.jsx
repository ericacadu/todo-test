import clsx from 'clsx';
import { PlusIcon } from '@heroicons/react/solid';

export function AddBtn({ status, newTask, inputRef, onFocus, onInput, onClick }) {
  return (
    <div
      className={clsx(
        'input-bar group flex rounded-full text-slate-700 transition-all duration-1000 ease-in-out',
        status ? 'w-full bg-slate-100' : 'w-0'
      )}
      onClick={onFocus}
    >
      <input
        type="text"
        className={clsx(
          'bg-transparent outline-none transition-all duration-1000 ease-in-out placeholder:font-light',
          status ? 'w-full px-5' : 'w-0'
        )}
        placeholder="Add new task"
        value={newTask}
        ref={inputRef}
        onChange={onInput}
      />
      <button
        type="button"
        className={clsx(
          'duration-600 flex items-center whitespace-nowrap rounded-full border-2 border-yellow-400 bg-yellow-400 py-2 text-white shadow-sm transition-all hover:border-cyan-600 hover:bg-cyan-600',
          status ? 'px-2' : 'px-5'
        )}
        onClick={onClick}
      >
        {!status && <span className={clsx('pointer-events-none mr-2')}>Add Task</span>}
        <PlusIcon className="duration-600 w-5 transform transition-all group-hover:rotate-90" />
      </button>
    </div>
  );
}

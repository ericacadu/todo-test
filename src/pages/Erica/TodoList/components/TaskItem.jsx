import clsx from 'clsx';
import { TaskButton, TaskInput } from './';
import { CheckIcon } from '../icons';
import { useTodoList } from '../todoContext';

export function TaskItem({ todo }) {
  const { toggleState, editTask } = useTodoList();
  const { title, id, isEdit, isDone } = todo;
  return (
    <li
      className={clsx(
        'flex cursor-pointer items-center justify-start space-x-1.5  rounded-xl py-5 pl-7 pr-5 transition-all duration-200',
        isDone ? 'bg-slate-300 bg-opacity-50' : 'bg-slate-100'
      )}
    >
      {isEdit && (
        <label className={clsx('flex w-full')}>
          <TaskInput value={title} onInput={(e) => editTask(e, id)} />
        </label>
      )}
      {!isEdit && (
        <label
          className={clsx('flex w-full cursor-pointer items-center overflow-x-hidden')}
          onClick={() => toggleState(id, 'isDone')}
        >
          <span
            className={clsx(
              'transition-all duration-500 ease-in-out',
              isDone ? 'ml-0 mr-3' : '-ml-4 mr-0'
            )}
          >
            <CheckIcon className={clsx('w-4')} />
          </span>
          <span>{title}</span>
        </label>
      )}

      <div className="flex items-center space-x-1">
        <TaskButton
          className={clsx(
            isDone && 'border-slate-300',
            isEdit ? 'border-yellow-300 bg-yellow-300 text-white' : 'hover:text-cyan-600'
          )}
          icon="edit"
          onClick={() => toggleState(id, 'isEdit')}
        />
        <TaskButton
          icon="delete"
          className={clsx(
            'hover:bg-slate-200 hover:text-red-400',
            isDone && 'border-slate-300 hover:bg-transparent'
          )}
          // onClick={() => openModal(id, 'Are you sure to delete')}
        />
      </div>
    </li>
  );
}

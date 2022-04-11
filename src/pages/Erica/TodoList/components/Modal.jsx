import clsx from 'clsx';
import { useTodoContext } from '../todoContext';

export function Modal({ modal }) {
  const { text, title, isShow, id } = modal;
  const { closeModal, deleteTask } = useTodoContext();

  return (
    <div
      className={clsx(
        'fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-50 text-slate-600',
        isShow ? '' : 'hidden'
      )}
    >
      <div className="w-100 flex max-w-md flex-col items-center justify-center space-y-6 rounded-2xl bg-white px-10 py-14 text-center shadow-lg shadow-slate-500">
        <p className="normal-case">
          {text} <span className="tracking-widest text-red-400">{title}</span>？
        </p>
        <div className="w-fll space-x-3">
          <button
            className="rounded-full px-8 py-2 capitalize ring-2 ring-inset ring-slate-200 transition-all duration-200 hover:bg-slate-400 hover:text-white hover:ring-slate-400"
            onClick={() => closeModal()}
          >
            cancel
          </button>
          <button
            className="rounded-full bg-red-200 px-8 py-2 capitalize transition-all duration-200 hover:bg-red-400 hover:text-white"
            onClick={() => deleteTask(id)}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

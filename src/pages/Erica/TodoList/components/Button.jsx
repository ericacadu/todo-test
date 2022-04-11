import clsx from 'clsx';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

export function Button({ icon, onClick, className }) {
  return (
    <button
      type="button"
      className={clsx(
        'aspect-square rounded-md border  p-2 transition-all duration-200',
        className || 'border-slate-200 hover:bg-slate-200 hover:text-cyan-600'
      )}
      onClick={onClick}
    >
      {icon === 'edit' && <PencilIcon className="w-5" />}
      {icon === 'delete' && <TrashIcon className="w-5" />}
    </button>
  );
}

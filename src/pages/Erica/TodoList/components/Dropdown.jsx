import clsx from 'clsx';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useHeaderContext } from '../todoContext';
import { category } from '../utils';

export function Dropdown() {
  const { current, menuStatus, toggleStatus, toggleMenu, onBlur } = useHeaderContext();
  return (
    <div
      className={clsx(
        'relative mr-3 flex cursor-pointer items-center whitespace-nowrap rounded-full border-2 border-slate-100 px-5 py-2 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-white hover:shadow-sm'
      )}
      tabIndex={0}
      onClick={() => toggleStatus()}
      onBlur={() => onBlur()}
    >
      <span>{current}</span>
      <ChevronDownIcon className="ml-2 w-5 transition-all duration-200" />
      <div
        className={clsx(
          'absolute top-full left-0 rounded-lg bg-white bg-opacity-80 p-5 text-slate-400 backdrop-blur-md transition-all duration-500 ease-in-out',
          menuStatus ? 'opacity-1 pointer-events-auto mt-2.5' : 'pointer-events-none mt-3 opacity-0'
        )}
      >
        <ul className={clsx('space-y-2')}>
          {category.map((item, i) => {
            return (
              <li
                key={i}
                className={clsx('transition-all duration-200 hover:text-cyan-600')}
                onClick={() => toggleMenu(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

import clsx from 'clsx';
import { ChevronDownIcon } from '../icons';
import { dropDownList } from '../scripts';

export function Dropdown() {
  return (
    <div
      className={clsx(
        'relative mr-3 flex cursor-pointer items-center whitespace-nowrap rounded-full border-2 border-slate-100 px-5 py-2 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-white hover:shadow-sm'
      )}
    >
      <span>{dropDownList[0]}</span>
      <ChevronDownIcon className="ml-2 w-5 transition-all duration-200" />
      <div
        className={clsx(
          'absolute top-full left-0 rounded-lg bg-white bg-opacity-80 p-5 text-slate-400 backdrop-blur-md transition-all duration-500 ease-in-out'
        )}
      >
        <ul className={clsx('space-y-2')}>
          {dropDownList.map((item, i) => (
            <li key={i} className={clsx('transition-all duration-200 hover:text-cyan-600')}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

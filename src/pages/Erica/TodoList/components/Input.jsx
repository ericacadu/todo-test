import clsx from 'clsx';

export function Input({ value, onInput }) {
  return (
    <input
      type="text"
      value={value}
      onInput={onInput}
      className={clsx('w-full rounded px-3 py-1.5 tracking-widest outline-none')}
    />
  );
}

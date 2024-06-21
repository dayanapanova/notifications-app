import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';

type Props = {
  error?: string;
};

// eslint-disable-next-line
export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & Props
>(({ error, className, ...restProps }, ref) => {
  const hasError = Boolean(error);
  return (
    <div>
      <input
        ref={ref}
        className={clsx(
          'w-full px-4 py-3 rounded-md border border-gray-300',
          hasError && 'border-red-600',
          className,
        )}
        {...restProps}
      />
      {hasError ? <p className="text-red-600 text-sm mt-2">{error}</p> : null}
    </div>
  );
});

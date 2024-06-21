import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

type Props = {
  isOutlined?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({
  isOutlined,
  children,
  className,
  onClick,
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center p-3 text-md rounded-md shadow focus:outline-none justify-center',
        className,
        isOutlined
          ? 'bg-white border border-blue-500 text-blue-500'
          : 'bg-blue-500 text-white hover:bg-blue-600',
      )}
    >
      {children}
    </button>
  );
};

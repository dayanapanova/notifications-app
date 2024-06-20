import React from 'react';
import { AddIcon } from '~/icons/AddIcon';

type Props = {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ icon: Icon, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-2 py-1.5 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none"
    >
      <span className="text-sm">{children}</span>
      {Icon && <AddIcon className="w-4 h-4 ml-2 text-white" />}
    </button>
  );
};
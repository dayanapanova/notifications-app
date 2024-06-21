import React from 'react';
import { CloseIcon } from '~/icons/CloseIcon';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md mx-auto z-50">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-gray-500 font-medium">{title}</h2>
            <button onClick={onClose} className="text-gray-700">
              <CloseIcon className="size-8" />
            </button>
          </div>
          <div className="mt-4 min-w-[300px] md:min-w-[400px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

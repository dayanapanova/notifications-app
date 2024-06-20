import React from 'react';

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
            <h2 className="text-xl font-semibold">{title}</h2>
            <button onClick={onClose} className="text-black">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
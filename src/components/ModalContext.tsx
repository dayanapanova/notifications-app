import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  createUserIsOpen: boolean;
  createNotificationIsOpen: boolean;
  setCreateUserIsOpen: (isOpen: boolean) => void;
  setCreateNotificationIsOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [createUserIsOpen, setCreateUserIsOpen] = useState(false);
  const [createNotificationIsOpen, setCreateNotificationIsOpen] =
    useState(false);

  return (
    <ModalContext.Provider
      value={{
        createUserIsOpen,
        createNotificationIsOpen,
        setCreateUserIsOpen,
        setCreateNotificationIsOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalState = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
};

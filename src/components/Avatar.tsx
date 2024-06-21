import React from 'react';

type Props = {
  name?: string;
  children?: React.ReactNode
};

function getInitials(fullName?: string) {
  if (!fullName) {
    return '';
  }
  const nameParts: string[] = fullName.split(' ');
  const initials: string = nameParts.map((name) => name.charAt(0)).join('');
  return initials.toUpperCase();
}

export const Avatar = ({ name, children }: Props) => {
  return (
    <div className="size-10 bg-gray-400 rounded-full overflow-hidden flex items-center justify-center text-white font-bold">
      {getInitials(name)}
      {children}
    </div>
  );
};

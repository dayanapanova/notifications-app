import Link from 'next/link';
import { Button } from './Button';
import { useModalState } from './ModalContext';
import { NotificationsButton } from './NotificationsButton';

export const Header = () => {
  const { setCreateUserIsOpen } = useModalState();

  return (
    <div className="fixed top-0 left-0 bg-white min-h-[46px] flex justify-between items-center w-full py-2 px-6 shadow-md">
      <Link href="/" className="text-md font-bold text-blue-500 uppercase">
        Notify app
      </Link>
      <div>
        <div className="flex items-center gap-4">
          <Button
            className="px-2 py-1 text-sm"
            isOutlined
            onClick={() => setCreateUserIsOpen(true)}
          >
            Create user
          </Button>
          <NotificationsButton />
        </div>
      </div>
    </div>
  );
};

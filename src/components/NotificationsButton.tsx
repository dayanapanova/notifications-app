import { useRef, useState } from 'react';
import { NotificationIcon } from '~/icons/NotificationIcon';
import { NotificationsDropdown } from './NotificationsDropdown';
import { trpc } from '~/utils/trpc';
import { useOutsideClick } from '~/hooks/useOutsideClick';

export const NotificationsButton = () => {
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false);
  const { data: notificationCount } = trpc.notification.count.useQuery();
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => setNotificationsIsOpen(false));

  return (
    <div className="relative flex items-center" ref={dropdownRef}>
      <NotificationsDropdown isOpen={notificationsIsOpen} onClose={() => setNotificationsIsOpen(false)} />
      <button
        onClick={() => setNotificationsIsOpen(true)}
        className="relative text-gray-600 rounded-full hover:bg-gray-100 p-1.5"
      >
        <NotificationIcon className="size-6" />
        {Boolean(notificationCount) && (
          <span className="absolute top-2 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full w-4 h-4">
            {notificationCount}
          </span>
        )}
      </button>
    </div>
  );
};


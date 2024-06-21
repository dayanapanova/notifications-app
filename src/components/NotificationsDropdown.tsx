import { NotificationIcon } from '~/icons/NotificationIcon';
import { trpc } from '../utils/trpc';
import { useModalState } from './ModalContext';
import { NotificationItem } from './NotificationItem';

type Props = {
  isOpen: boolean;
  onClose?: () => void;
};

export const NotificationsDropdown = ({ isOpen, onClose }: Props) => {
  const { data, isLoading } = trpc.notification.list.useQuery();
  const { createNotificationIsOpen, setCreateNotificationIsOpen } =
    useModalState();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute right-0 top-12 bg-white w-[340px] rounded-md overflow-hidden shadow-lg border">
      <div className="max-h-[400px] overflow-y-auto">
        {data?.map((notification) => (
          <NotificationItem
            key={`notification-${notification.id}`}
            notification={notification}
            onClick={onClose}
          />
        ))}
        {!isLoading && !data?.length ? (
          <div className="p-4 flex items-center gap-2 flex-col">
            <NotificationIcon className="size-12 opacity-20" />
            <p className="text-center text-gray-400">There are no new notifications.</p>
          </div>
        ) : null}
      </div>
      <div>
        <button
          className="bg-blue-500 block w-full text-white p-2 font-medium"
          onClick={() => {
            setCreateNotificationIsOpen(!createNotificationIsOpen);
            onClose?.();
          }}
        >
          Create new notification
        </button>
      </div>
    </div>
  );
};

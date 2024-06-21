import TimeAgo from 'timeago-react';
import { toast } from 'react-toastify';
import { NotificationType } from '@prisma/client';
import { NotificationItemSelect } from '~/server/routers/notification';
import { trpc } from '~/utils/trpc';
import clsx from 'clsx';
import { Avatar } from './Avatar';
import { StarIcon } from '~/icons/StarIcon';
import { useRouter } from 'next/router'

type Props = {
  notification: NotificationItemSelect;
  onClick?: () => void;
};

type BaseItemProps = {
  notification: NotificationItemSelect;
  title?: string;
  description: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
};

const BaseItem = ({ notification, title, description, onClick, icon, className }: BaseItemProps) => {
  const utils = trpc.useUtils();
  const { mutateAsync: markAsRead } = trpc.notification.markAsRead.useMutation({
    onSuccess: async () => {
      await utils.notification.list.invalidate();
      await utils.notification.count.invalidate();
      toast.success("The notification was marked as read successfully.");
    },
  });
  const isUnread = notification?.isUnread;

  return (
    <div
      onClick={async () => {
        if (isUnread) {
          await markAsRead({ notificationId: notification?.id });
        }
        onClick?.();
      }}
      className={clsx(
        'p-3 text-left hover:bg-gray-50 text-sm w-full flex gap-3 border-b-2 border-gray-50 cursor-pointer',
        isUnread && 'bg-gray-100 hover:!bg-gray-100  border-l-4',
        className,
      )}
    >
      <Avatar name={notification?.user?.name}>
        {icon}
      </Avatar>
      <div>
        {notification?.user?.name ?? title ? (
          <>
            <strong>{title ?? notification?.user?.name}</strong> •
          </>
        ) : null}{' '}
        {description}
        <TimeAgo
          datetime={notification?.createdAt}
          className="block w-full text-xs text-gray-400"
        />
      </div>
    </div>
  );
};

export const NotificationItem = ({ notification, onClick }: Props) => {
  const { push } = useRouter()
  if (notification.type === NotificationType.Comment) {
    return (
      <BaseItem
        notification={notification}
        onClick={() => {
          push("/comments");
          onClick?.();
        }}
        className="border-l-yellow-400"
        description="tagged you in a comment"
      />
    );
  }

  if (notification.type === NotificationType.Release) {
    return (
      <BaseItem
        notification={notification}
        title="New features"
        icon={<StarIcon className="size-6" />}
        onClick={() => {
          alert(`Release number ${notification?.releaseVersion}`);
          onClick?.();
        }}
        className="border-l-lime-400"
        description="see what’s new"
      />
    );
  }

  if (notification.type === NotificationType.JoinWorkspace) {
    return (
      <BaseItem
        notification={notification}
        onClick={() => {
          push("/workspace");
          onClick?.();
        }}
        className="border-l-green-400"
        description="joined your workspace"
      />
    );
  }

  if (notification.type === NotificationType.Chat) {
    return (
      <BaseItem
        notification={notification}
        onClick={() => {
          push("/chats");
          onClick?.();
        }}
        className="border-l-cyan-400"
        description="shared a chat with you"
      />
    );
  }

  return null;
};

export default NotificationItem;

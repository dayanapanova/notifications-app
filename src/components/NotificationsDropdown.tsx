import NotificationItem from "./NotificationItem";

type Props = {
  isOpen: boolean
}

const NotificationsDropdown = ({ isOpen }: Props) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="absolute right-0 top-4 p-2 bg-white min-w-20">
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </div>
  );
};

export default NotificationsDropdown;

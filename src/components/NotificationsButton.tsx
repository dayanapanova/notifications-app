import { NotificationIcon } from "~/icons/NotificationIcon";
import { NotificationsDropdown } from "./NotificationsDropdown";
import { useState } from "react";

export const NotificationsButton = () => {
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false)
  return (
    <div className="relative">
      <NotificationsDropdown isOpen={notificationsIsOpen} />
      <button onClick={() => setNotificationsIsOpen(true)} className="text-black">
        <NotificationIcon />
      </button>
    </div>
  );
};

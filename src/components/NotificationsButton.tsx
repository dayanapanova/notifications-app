import { useState, useRef } from "react";
import NotificationIcon from "~/icons/NotificationIcon";
import NotificationsDropdown from "./NotificationsDropdown";
import useOutsideClick from "~/hooks/useOutsideClick";

const NotificationsButton = () => {
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => setNotificationsIsOpen(false));
  return (
    <div className="relative" ref={dropdownRef}>
      <NotificationsDropdown
        isOpen={notificationsIsOpen}
      />
      <button onClick={() => setNotificationsIsOpen(true)} className="text-black">
        <NotificationIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default NotificationsButton;

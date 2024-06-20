import React, { ChangeEvent, useState } from "react";
import { NotificationItem } from "./NotificationItem";
import { Button } from "./Button";
import { Modal } from "./Modal";


type Props = {
  isOpen: boolean;
}

const notificationTypes = [
  { id: 1, type: 'Platform update' },
  { id: 2, type: 'Comment tag' },
  { id: 3, type: 'Access granted' },
  { id: 4, type: 'Join workspace' },
];

export const NotificationsDropdown = ({ isOpen }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');


  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="absolute right-5 top-5 p-2 bg-white min-w-40 border-2 rounded-md">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <Button icon onClick={() => setModalIsOpen(true)}>
          Add notification
        </Button>
      </div>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} title="Add notification">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notification type
          </label>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="min-w-[240px] cursor-pointer block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm"
          >
            {notificationTypes?.map((notification) => (
              <option
                key={notification?.id}
                value={notification?.type}
                className="cursor-pointer py-2 px-2 bg-white text-gray-700 hover:bg-gray-100"
              >
                {notification?.type}
              </option>
            ))}
          </select>
        </div>
      </Modal>
    </>
  );
};

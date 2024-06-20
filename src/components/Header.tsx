import { NotificationsButton } from "./NotificationsButton";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 bg-white flex justify-between w-full">
      <h3 className="text-md">Notifications app</h3>
      <div>
        <NotificationsButton />
      </div>
    </div>
  );
};

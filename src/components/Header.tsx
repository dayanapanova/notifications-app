import { NotificationsButton } from "./NotificationsButton";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 bg-white min-h-[46px] flex justify-between items-center w-full p-2 shadow-md">
      <h3 className="text-md font-bold">Notifications app</h3>
      <div>
        <NotificationsButton />
      </div>
    </div>
  );
};
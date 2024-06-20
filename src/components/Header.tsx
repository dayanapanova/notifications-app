import NotificationsButton from "./NotificationsButton";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 bg-white flex justify-between items-center w-full p-1.5">
      <h3 className="text-md">Notifications app</h3>
      <div>
        <NotificationsButton />
      </div>
    </div>
  );
};

export default Header;

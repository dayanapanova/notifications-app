import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="flex flex-col max-w-xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-600 mb-4">Welcome</h1>
        <span className="text-6xl block mb-2">🚀</span>
        <p className="text-xl text-gray-500 mb-4">In this app, you can create a user and then create a notification related to that user.</p>
        <p className="text-xl text-gray-500">Each notification can be marked as read.</p>
      </div>
    </div>
  );
};

export default Home;


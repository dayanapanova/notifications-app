import { NextPage } from 'next';

const Comments: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="flex flex-col max-w-xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-600 mb-4">Comments</h1>
        <span className="text-6xl block">💬</span>
      </div>
    </div>
  );
};

export default Comments;


import { NextPage } from 'next';
import { CreateArticleForm } from '~/components/ArticleForm';
import { trpc } from '~/utils/trpc';

const Articles: NextPage = () => {
  const { data } = trpc.article.list.useQuery();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="flex flex-col max-w-xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-600 mb-4">Articles</h1>
        <span className="text-6xl block">📒</span>
      </div>
      <div>
        {data?.map(({ id, title, text }) => (
          <div key={`article-${id}`}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <CreateArticleForm />
    </div>
  );
};

export default Articles;


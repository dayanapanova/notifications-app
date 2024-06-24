import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { trpc } from '../utils/trpc';
import { Input } from './Input';
import { Button } from './Button';
import { CreateArticleInput, createArticleSchema } from '~/schema/article';

export const CreateArticleForm = () => {
  const utils = trpc.useUtils();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateArticleInput>({
    resolver: zodResolver(createArticleSchema),
  });

  const { mutateAsync: createArticle } = trpc.article.create.useMutation({
    onSuccess: async () => {
      reset();
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await createArticle(data);
        await utils.article.list.invalidate();
      })}
      className="flex flex-col w-full gap-5"
    >
      <Input
        placeholder="Title"
        className="border"
        {...register('title')}
        error={errors.title?.message}
      />
      <textarea
        placeholder="Text"
        className="border"
        {...register('text')}
      />
      <Button className="w-full" type="submit">Save</Button>
    </form>
  );
};

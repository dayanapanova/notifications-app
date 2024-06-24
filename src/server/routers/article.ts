import { prisma } from '~/server/prisma';
import { publicProcedure, router } from '../trpc';
import { createArticleSchema } from '~/schema/article';

export const articleRouter = router({
  list: publicProcedure
  .query(async () => {

    const articles = await prisma.article.findMany();
    return articles;
  }),
    create: publicProcedure
      .input(createArticleSchema)
      .mutation(async ({ input }) => {
        const { title, text } = input;
  
        const article = await prisma.article.create({
          data: {
            title,
            text,
          },
        });
        return article;
      }),
  });
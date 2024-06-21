import { prisma } from '~/server/prisma';

import { router, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { createUserSchema } from '~/schema/user';

export const userRouter = router({
  list: publicProcedure.query(async () => {
    const items = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return items;
  }),
  create: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ input }) => {
      const { email, name } = input;

      const existing = await prisma.user.findUnique({
        where: { email },
      });

      if (existing) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'User already exists!',
        });
      }

      const user = await prisma.user.create({
        data: {
          email,
          name,
        },
      });
      return user;
    }),
});

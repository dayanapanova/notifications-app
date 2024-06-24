import { createCallerFactory, router } from '../trpc';
import { articleRouter } from './article';
import { notificationRouter } from './notification';
import { userRouter } from './user';

export const appRouter = router({
  notification: notificationRouter,
  user: userRouter,
  article: articleRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;

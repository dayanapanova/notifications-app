import { createCallerFactory, router } from '../trpc';
import { notificationRouter } from './notification';
import { userRouter } from './user';

export const appRouter = router({
  notification: notificationRouter,
  user: userRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;

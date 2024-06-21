import { Prisma } from '@prisma/client';
import { prisma } from '~/server/prisma';

import { router, publicProcedure } from '../trpc';
import { createNotification, markAsReadSchema } from '~/schema/notification';
import { NotificationType } from '@prisma/client';

export const notificationItemSelect =
  Prisma.validator<Prisma.NotificationSelect>()({
    id: true,
    releaseVersion: true,
    type: true,
    createdAt: true,
    isUnread: true,
    user: {
      select: {
        email: true,
        name: true,
      },
    },
  });
export type NotificationItemSelect = Prisma.NotificationGetPayload<{
  select: typeof notificationItemSelect;
}>;

export const notificationRouter = router({
  list: publicProcedure.query(async () => {
    const notifications = await prisma.notification.findMany({
      select: notificationItemSelect,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return notifications;
  }),
  count: publicProcedure.query(async () => {
    const notificationsCount = await prisma.notification.count({
      where: {
        isUnread: true,
      },
    });

    return notificationsCount;
  }),
  markAsRead: publicProcedure
    .input(markAsReadSchema)
    .mutation(async ({ input }) => {
      const { notificationId } = input;

      await prisma.notification.update({
        where: {
          id: notificationId,
        },
        data: {
          isUnread: false,
        },
      });

      return {
        success: true,
      };
    }),
  create: publicProcedure
    .input(createNotification)
    .mutation(async ({ input }) => {
      const { userId, type, releaseVersion } = input;

      if (type === NotificationType.Release) {
        await prisma.notification.create({
          data: {
            type,
            releaseVersion,
          },
        });

        return {
          success: true,
        };
      }

      await prisma.notification.create({
        data: {
          type,
          userId,
        },
      });

      return {
        success: true,
      };
    }),
});

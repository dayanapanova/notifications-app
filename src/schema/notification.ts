import { NotificationType } from '@prisma/client';
import { z } from 'zod';

export const createNotification = z
  .object({
    type: z.nativeEnum(NotificationType),
    userId: z.string().uuid().optional(),
    releaseVersion: z.string().min(1).optional(),
  })
  .refine(
    (data) => {
      if (data.type === NotificationType.Release) {
        return !!data.releaseVersion;
      } else {
        return !!data.userId;
      }
    },
    {
      message:
        'userId is required for Comment/Chat/JoinWorkspace and releaseVersion is required for Release',
      path: ['userId', 'releaseVersion'],
    },
  );

export const markAsReadSchema = z.object({
  notificationId: z.string().uuid(),
});

export type NotificationInput = z.input<typeof createNotification>;

import { NotificationType } from '@prisma/client';
import { trpc } from '../utils/trpc';
import { UsersList } from './UsersList';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NotificationInput, createNotification } from '~/schema/notification';
import { Modal } from './Modal';
import { Input } from './Input';
import { useModalState } from './ModalContext';
import { Button } from './Button';
import { toast } from 'react-toastify';

export const CreateNotificationForm = () => {
  const utils = trpc.useUtils();
  const { createNotificationIsOpen, setCreateNotificationIsOpen } =
    useModalState();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<NotificationInput>({
    resolver: zodResolver(createNotification),
  });

  const { mutateAsync: createNotificaton } =
    trpc.notification.create.useMutation({
      onSuccess: async () => {
        reset();
        setCreateNotificationIsOpen(false);
        await utils.notification.list.invalidate();
        await utils.notification.count.invalidate();
        toast.success("The notification was added successfully");
      },
    });

  const formType = watch('type');

  return (
    <Modal
      title="Create notification"
      isOpen={createNotificationIsOpen}
      onClose={() => {
        setCreateNotificationIsOpen(false);
        reset();
      }}
    >
      <form
        onSubmit={handleSubmit(async (data) => await createNotificaton(data))}
        className="flex flex-col gap-4"
      >
        <div>
          <label className="text-gray-600 text-sm font-medium mb-2 block">
            Type:
          </label>
          <select
            className="w-full px-4 py-3 rounded-md border border-gray-300"
            {...register('type', {
              onChange: () => {
                setValue("userId", undefined, { shouldValidate: true })
                setValue("releaseVersion", undefined, { shouldValidate: true })
              }
            })}
          >
            <option value={NotificationType.Chat}>Chat</option>
            <option value={NotificationType.Comment}>Comment</option>
            <option value={NotificationType.Release}>Release</option>
            <option value={NotificationType.JoinWorkspace}>
              Join workspace
            </option>
          </select>
        </div>
        {formType === NotificationType.Release ? (
          <Input
            placeholder="Release version"
            {...register('releaseVersion')}
            error={errors?.releaseVersion?.message}
          />
        ) : (
          <UsersList
            onSelect={(userId) =>
              setValue('userId', userId, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
              })
            }
            selectedId={watch('userId')}
            error={errors?.userId?.message}
          />
        )}
        <Button className="w-full p-4" type="submit">
          Save
        </Button>
      </form>
    </Modal>
  );
};

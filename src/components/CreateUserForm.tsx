import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import { CreateUserInput, createUserSchema } from '~/schema/user';
import { trpc } from '../utils/trpc';
import { Input } from './Input';
import { Modal } from './Modal';
import { useModalState } from './ModalContext';
import { Button } from './Button';

export const CreateUserForm = () => {
  const utils = trpc.useUtils();
  const { createUserIsOpen, setCreateUserIsOpen, setCreateNotificationIsOpen } = useModalState();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const { mutateAsync: createUser } = trpc.user.create.useMutation({
    onSuccess: async () => {
      reset();
      setCreateUserIsOpen(false);
      await utils.user.list.invalidate();
      toast.success("The user was added successfully");
      setCreateNotificationIsOpen(true);
    },
  });

  return (
    <Modal
      title="Create user"
      isOpen={createUserIsOpen}
      onClose={() => {
        setCreateUserIsOpen(false);
        reset();
      }}
    >
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await createUser(data);
          } catch {
            setError('email', { message: 'User already exists!' });
          }
        })}
        className="flex flex-col w-full gap-5"
      >
        <Input
          placeholder="Email"
          className="border"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          placeholder="Name"
          className="border"
          {...register('name')}
          error={errors.name?.message}
        />
        <Button className="w-full" type="submit">Save</Button>
      </form>
    </Modal>
  );
};

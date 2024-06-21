import { trpc } from '../utils/trpc';
import clsx from 'clsx';
import { useModalState } from './ModalContext';

type Props = {
  onSelect: (userId: string) => void;
  selectedId?: string;
  error?: string;
};

export const UsersList = ({ onSelect, selectedId, error }: Props) => {
  const { data } = trpc.user.list.useQuery();
  const { setCreateUserIsOpen } = useModalState();

  return (
    <div>
      <label className="text-gray-600 text-sm font-medium mb-2 block">
        Select user:
      </label>
      <div className="border border-gray-300 rounded-md overflow-hidden max-h-[300px] overflow-y-auto">
        {data?.map(({ id, name, email }) => {
          const isSelected = selectedId === id;

          return (
            <div
              key={`user-${id}`}
              className={clsx(
                'flex gap-3 w-full text-left py-3 px-4',
                'border-b border-gray-300 hover:bg-gray-50 cursor-pointer last:border-0',
                isSelected && 'bg-gray-100 hover:!bg-gray-100',
              )}
              onClick={() => onSelect(id)}
            >
              <div className="size-6 border border-gray-300 rounded-full flex p-0.5">
                {isSelected && (
                  <div className="w-full h-full bg-blue-500 rounded-full" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-md font-medium">{name}</span>
                <span className="block text-xs text-gray-500">{email}</span>
              </div>
            </div>
          );
        })}
        {error ? <p className="text-red-600">{error}</p> : null}
      </div>
      <button
        onClick={() => setCreateUserIsOpen(true)}
        className="text-blue-500 text-sm py-2"
        type="button"
      >
        Add new user
      </button>
    </div>
  );
};

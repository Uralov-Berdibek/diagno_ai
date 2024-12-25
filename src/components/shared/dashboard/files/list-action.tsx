import { IFolderAndFile } from '@/types';
import { Download, MoreVertical, Pencil, Star, Trash, UserPlus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover';
import { Separator } from '../../../ui/separator';
import { toast } from 'sonner';

interface ListActionProps {
  item: IFolderAndFile;
  onStartEditing?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ListAction = ({ item, onStartEditing }: ListActionProps) => {
  const router = useRouter();
  const { workspaceId } = useParams();

  const onDelete = async () => {
    try {
      // Add your delete API call here
      await toast.promise(
        // Replace with your actual delete API call
        Promise.resolve(),
        {
          loading: 'Deleting...',
          success: 'File deleted successfully',
          error: 'Error deleting file',
        },
      );
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const onStar = async () => {
    try {
      // Add your star/unstar API call here
      await toast.promise(
        // Replace with your actual star API call
        Promise.resolve(),
        {
          loading: 'Updating...',
          success: item.isStar ? 'Removed from starred' : 'Added to starred',
          error: 'Error updating starred status',
        },
      );
    } catch (error) {
      console.error('Error starring:', error);
    }
  };

  const onShare = async () => {
    try {
      // Add your share API call here
      await toast.promise(
        // Replace with your actual share API call
        Promise.resolve(),
        {
          loading: 'Preparing share...',
          success: 'Share link copied to clipboard',
          error: 'Error generating share link',
        },
      );
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className='flex items-center space-x-1'>
      <div
        role='button'
        onClick={onDelete}
        className='p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition opacity-0 group-hover:opacity-100'
      >
        <Trash className='w-4 h-4 opacity-50' />
      </div>
      <div
        role='button'
        onClick={onStar}
        className='p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition opacity-0 group-hover:opacity-100'
      >
        <Star
          className={`w-4 h-4 ${item.isStar ? 'fill-yellow-400 text-yellow-400' : 'opacity-50'}`}
        />
      </div>
      <Popover>
        <PopoverTrigger className='flex justify-start' asChild>
          <div role='button' className='p-2 hover:bg-secondary rounded-full transition'>
            <MoreVertical className='h-4 w-4' />
          </div>
        </PopoverTrigger>
        <PopoverContent className='px-0 py-2'>
          <div
            className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm'
            role='button'
          >
            <Download className='w-4 h-4' />
            <span>Download</span>
          </div>

          <div
            onClick={onStartEditing}
            className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm'
            role='button'
          >
            <Pencil className='w-4 h-4' />
            <span>Rename</span>
          </div>

          <Separator />

          <div
            onClick={onShare}
            className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm'
            role='button'
          >
            <UserPlus className='w-4 h-4' />
            <span>Share</span>
          </div>

          <div
            onClick={onDelete}
            className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm text-red-600'
            role='button'
          >
            <Trash className='w-4 h-4' />
            <span>Move to trash</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ListAction;

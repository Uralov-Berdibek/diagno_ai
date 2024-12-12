'use client';

import { byteConverter } from '@/lib/utils';
import { IFolderAndFile } from '@/types';
import { useUser } from '@clerk/nextjs';
import { File, Folder, Save, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import { Avatar, AvatarImage } from '../../../ui/avatar';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { TableCell, TableRow } from '../../../ui/table';
import ListAction from './list-action';

interface ListItemProps {
  item: IFolderAndFile;
}

const ListItem = ({ item }: ListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(item.name);
  const inputRef = useRef<HTMLInputElement>(null);
  const { refresh, push } = useRouter();
  const { user } = useUser();

  return (
    <TableRow
      className='group cursor-pointer'
      onClick={item.size ? undefined : () => push(`/document/${item.id}`)}
    >
      <TableCell className='font-medium'>
        {isEditing ? (
          <div className='relative'>
            <Input ref={inputRef} value={value} />
            <div className='absolute right-0 top-0 h-full flex items-center space-x-1'>
              <Button size='sm' variant='outline'>
                <Save className='w-4 h-4' />
              </Button>
              <Button size='sm' variant='outline' onClick={() => setIsEditing(false)}>
                <X className='w-4 h-4' />
              </Button>
            </div>
          </div>
        ) : (
          <div className='flex items-center space-x-1' role='button'>
            {item.size ? (
              <File className='w-4 h-4 text-blue-500' />
            ) : (
              <Folder className='w-4 h-4 text-gray-500' />
            )}
            <span>{item.name}</span>
          </div>
        )}
      </TableCell>
      <TableCell className='flex items-center space-x-2'>
        <Avatar className='w-6 h-6'>
          <AvatarImage src={user?.imageUrl} />
        </Avatar>
        <span className='opacity-75'>me</span>
      </TableCell>
      <TableCell>22.02.2024</TableCell>
      <TableCell>{item.size ? byteConverter(item.size) : '-'}</TableCell>
      <TableCell className='flex justify-end items-center space-x-2'>
        <ListAction item={item} />
      </TableCell>
    </TableRow>
  );
};

export default ListItem;

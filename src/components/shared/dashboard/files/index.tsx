'use client';

import { useLayout } from '../../../../hooks/use-layout';
import { IFolderAndFile } from '@/types';
import SuggestCard from '../../card/suggest-card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../../../ui/table';
import Empty from '../../empty';
import ListItem from './list-item';

interface ListsProps {
  files: IFolderAndFile[];
}

const Lists = ({ files }: ListsProps) => {
  const { layout } = useLayout();
  const hasContent = files.length > 0;

  return layout === 'list' ? (
    hasContent ? (
      <Table className='mt-4'>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead>File size</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...files].map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    ) : (
      <Empty />
    )
  ) : (
    <div>
      <div className='text-sm opacity-70 mt-6'>Suggested</div>
      {files.length > 0 ? (
        <div className='grid grid-cols-4 gap-4 mt-4'>
          {files.map((file) => (
            <SuggestCard key={file.id} item={file} />
          ))}
        </div>
      ) : (
        <Empty sm />
      )}
    </div>
  );
};

export default Lists;

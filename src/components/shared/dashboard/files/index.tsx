'use client';

import { useLayout } from '../../../../hooks/use-layout';
import { IFolderAndFile } from '@/types';
import SuggestCard from '../../card/suggest-card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../../../ui/table';
import Empty from '../../empty';
import ListItem from './list-item';
import { getAllPages, Page } from '../../../../lib/api';
import { useEffect, useState } from 'react';

const Lists = () => {
  const { layout } = useLayout();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const hasContent = pages.length > 0;

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const data = await getAllPages();
        setPages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Xatolik yuz berdi');
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

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
          {pages.map((item) => (
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
      {pages.length > 0 ? (
        <div className='grid grid-cols-4 gap-4 mt-4'>
          {pages.map((file) => (
            <div key={file.id}>{file.name}</div>
            // <SuggestCard key={file.id} item={file} />
          ))}
        </div>
      ) : (
        <Empty sm />
      )}
    </div>
  );
};

export default Lists;

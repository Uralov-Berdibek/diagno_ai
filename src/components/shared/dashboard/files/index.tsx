'use client';

import { useLayout } from '../../../../hooks/use-layout';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../../../ui/table';
import Empty from '../../empty';
import ListItem from './list-item';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface Page {
  id: number;
  name: string;
  path: string;
  comment: {};
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

const Lists = () => {
  const { layout } = useLayout();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/pages/get-all-pages');
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Failed to fetch pages');
        }

        setPages(result.data);
      } catch (error) {
        console.error('Error fetching pages:', error);
        toast.error('Failed to load pages');
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return layout === 'list' ? (
    pages.length > 0 ? (
      <Table className='mt-4'>
        <TableHeader>
          <TableRow>
            <TableHead>Fayl Nomi</TableHead>
            <TableHead>Foydalanuvchi</TableHead>
            <TableHead>Yaratilgan vaqti</TableHead>
            <TableHead>Hajmi</TableHead>
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
      <div className='text-sm opacity-70 mt-6'>Pages</div>
      {pages.length > 0 ? (
        <div className='grid grid-cols-4 gap-4 mt-4'>
          {pages.map((page) => (
            <div key={page.id}>{page.name}</div>
          ))}
        </div>
      ) : (
        <Empty sm />
      )}
    </div>
  );
};

export default Lists;

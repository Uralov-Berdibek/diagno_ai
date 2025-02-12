'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

const FilesHeader = () => {
  const router = useRouter();

  const handleNewChat = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    try {
      toast.loading('Creating a new page...');

      const slug = uuidv4(); // Generate unique ID

      toast.dismiss();
      toast.success('Page created successfully!');

      router.push(`/dashboard/new-chat/${slug}`);
    } catch (error: any) {
      toast.dismiss();
      toast.error('Failed to create a new page. Please try again.');
      console.error('Error creating page:', error.message || error);
    }
  };
  return (
    <div className='flex justify-between items-center'>
      <h3 className='mb-4 text-lg leading-6 font-semibold text-slate-800 dark:text-white'>
        Foydalanish tarixi.
      </h3>
      <a
        onClick={handleNewChat}
        className='group inline-flex items-center h-8 rounded-sm text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-transparent text-slate-800 border border-slate-800 dark:text-white  focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700  dark:focus:ring-slate-500 -mt-4'
        href='#'
      >
        Yangi Chat<span className='sr-only'>, Diagno AI</span>
        <svg
          className='overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400'
          width='3'
          height='6'
          viewBox='0 0 3 6'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M0 0L3 3L0 6'></path>
        </svg>
      </a>
    </div>
  );
};

export default FilesHeader;

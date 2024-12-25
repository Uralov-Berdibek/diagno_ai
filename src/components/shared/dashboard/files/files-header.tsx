'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

const FilesHeader = () => {
  const router = useRouter();

  const handleNewChat = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = uuidv4();

    try {
      toast.info('Creating a new page, please wait...');

      // Add API call to create the page
      const response = await fetch('/api/pages/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Failed to create page');
      }

      toast.success('Page created successfully! Redirecting...');
      router.push(`/dashboard/new-chat/${id}`);
    } catch (error: any) {
      console.error('Error creating page:', error.message || error);
      toast.error('Failed to create a new page. Please try again.');
    }
  };
  return (
    <div className='flex justify-between items-center'>
      <h3 className='mb-4 text-lg leading-6 font-semibold text-slate-800 dark:text-white'>
        Diagno AI-dan foydalanish tarixi
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

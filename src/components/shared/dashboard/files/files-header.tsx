import React from 'react';

const FilesHeader = () => {
  return (
    <div className='flex justify-between items-center'>
      <h3 className='mb-4 text-lg leading-6 font-semibold text-blue-500'>Diagno AI History</h3>
      <a
        className='group inline-flex items-center h-8 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 -mt-4'
        href='/dashboard/new-chat'
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

import React from 'react';

const Info = () => {
  return (
    <div
      id='banner'
      tabIndex={-1}
      className='fixed top-0 z-50 flex justify-center w-full px-4 py-3 border-b border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700'
    >
      <div className='items-center md:flex'>
        <p className='text-sm font-medium text-gray-900 md:my-0 dark:text-white'>
          <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>
            Info
          </span>
          Sayt test rejimida ishlamoqda. Iltimos, xatoliklar yuzaga kelsa, biz bilan boglaning!
          <a
            href='/dashboard/comunity/'
            className='inline-flex items-center ml-2 text-sm font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline'
          >
            Murojat qilmoq
            <svg
              className='w-3 h-3 ml-1.5 text-blue-600 dark:text-blue-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              ></path>
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Info;

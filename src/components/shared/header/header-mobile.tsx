'use client';

import React, { useCallback } from 'react';
import useHeaderbarMobile from '../../../hooks/useHeaderbarMobile';
import clsx from 'clsx';

const HeaderMobile = () => {
  const headerbarMobile = useHeaderbarMobile();

  const onCloseHeaderbarMobile = useCallback(() => {
    headerbarMobile.onClose();
  }, [headerbarMobile]);
  return (
    <div className={`${clsx(headerbarMobile.isOpen ? '' : 'hidden')} transition-all duration-500`}>
      <div className='fixed z-50 inset-0 lg:hidden'>
        <div className='fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80'></div>
        <div className='fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5'>
          <button
            type='button'
            className='absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
            onClick={onCloseHeaderbarMobile}
          >
            <span className='sr-only'>Close navigation</span>
            <svg viewBox='0 0 10 10' className='w-2.5 h-2.5 overflow-visible' aria-hidden='true'>
              <path
                d='M0 0L10 10M10 0L0 10'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
            </svg>
          </button>
          <ul className='space-y-6'>
            <li>
              <a className='hover:text-sky-500 dark:hover:text-sky-400' href='/docs/installation'>
                Docs
              </a>
            </li>
            <li>
              <a
                href='https://tailwindui.com/?ref=top'
                className='hover:text-sky-500 dark:hover:text-sky-400'
              >
                Components
              </a>
            </li>
            <li>
              <a className='hover:text-sky-500 dark:hover:text-sky-400' href='/blog'>
                Blog
              </a>
            </li>
            <li>
              <a className='hover:text-sky-500 dark:hover:text-sky-400' href='/showcase'>
                Showcase
              </a>
            </li>
            <li>
              <a
                href='https://github.com/tailwindlabs/tailwindcss'
                className='hover:text-sky-500 dark:hover:text-sky-400'
              >
                GitHub
              </a>
            </li>
          </ul>
          <div className='mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10'>
            <div className='flex items-center justify-between'>
              <label htmlFor='theme' className='text-slate-700 font-normal dark:text-slate-400'>
                Switch theme
              </label>
              <div className='relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-6 h-6 mr-2 dark:hidden'
                >
                  <path
                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    className='stroke-slate-400 dark:stroke-slate-500'
                  ></path>
                  <path
                    d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
                    className='stroke-slate-400 dark:stroke-slate-500'
                  ></path>
                </svg>
                <svg viewBox='0 0 24 24' fill='none' className='w-6 h-6 mr-2 hidden dark:block'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z'
                    className='fill-transparent'
                  ></path>
                  <path
                    d='m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z'
                    className='fill-slate-400'
                  ></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z'
                    className='fill-slate-400'
                  ></path>
                </svg>
                Light
                <svg className='w-6 h-6 ml-2 text-slate-400' fill='none'>
                  <path
                    d='m15 11-3 3-3-3'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
                <select
                  id='theme'
                  className='absolute appearance-none inset-0 w-full h-full opacity-0'
                >
                  <option value='light'>Light</option>
                  <option value='dark'>Dark</option>
                  <option value='system'>System</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;

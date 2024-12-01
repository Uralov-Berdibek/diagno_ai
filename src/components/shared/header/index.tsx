'use client';

import Image from 'next/image';
import React, { useCallback } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useSidebarMobile from '../../../hooks/useSidebarMobile';
import useHeaderbarMobile from '../../../hooks/useHeaderbarMobile';

type Props = {};

const Header = (props: Props) => {
  const sidebarMobile = useSidebarMobile();
  const headerbarMobile = useHeaderbarMobile();

  const onOpenSidebarMobile = useCallback(() => {
    sidebarMobile.onOpen();
  }, [sidebarMobile]);

  const onOpenHeaderbarMobile = useCallback(() => {
    headerbarMobile.onOpen();
  }, [headerbarMobile]);

  return (
    <div className='sticky top-0 z-40 w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 dark:bg-transparent'>
      <div className='max-w-8xl mx-auto'>
        <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
          <div className='relative flex items-center'>
            <a className='mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto' href='/'>
              <span className='sr-only'>Diagno AI</span>
              <Image
                src={'/corinna-ai-logo.png'}
                alt='Logo'
                width={200}
                height={25}
                className='w-[82px]'
              />
            </a>
            <div className='relative hidden lg:flex items-center ml-auto'>
              <nav className='text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200'>
                <ul className='flex space-x-8'>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/docs/installation'
                    >
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
                </ul>
              </nav>
              <div className='flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800'>
                <label
                  className='sr-only'
                  htmlFor='headlessui-listbox-button-:R2lkcr6:'
                  id='headlessui-label-:R1lkcr6:'
                  data-headlessui-state=''
                >
                  Theme
                </label>
                <button
                  type='button'
                  id='headlessui-listbox-button-:R2lkcr6:'
                  aria-haspopup='listbox'
                  aria-expanded='false'
                  data-headlessui-state=''
                  aria-labelledby='headlessui-label-:R1lkcr6: headlessui-listbox-button-:R2lkcr6:'
                >
                  <span className='dark:hidden'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-6 h-6'
                    >
                      <path
                        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                        className='fill-sky-400/20 stroke-sky-500'
                      ></path>
                      <path
                        d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
                        className='stroke-sky-500'
                      ></path>
                    </svg>
                  </span>
                  <span className='hidden dark:inline'>
                    <svg viewBox='0 0 24 24' fill='none' className='w-6 h-6'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z'
                        className='fill-sky-400/20'
                      ></path>
                      <path
                        d='m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z'
                        className='fill-sky-500'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z'
                        className='fill-sky-500'
                      ></path>
                    </svg>
                  </span>
                </button>
                <Avatar className='w-[25px] h-[25px] ml-4'>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <button
              type='button'
              className='ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300'
            >
              <span className='sr-only'>Search</span>
              <svg
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='m19 19-3.5-3.5'></path>
                <circle cx='11' cy='11' r='6'></circle>
              </svg>
            </button>
            <div className='ml-2 -my-1 lg:hidden'>
              <button
                type='button'
                className='text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
                onClick={onOpenHeaderbarMobile}
              >
                <span className='sr-only'>Navigation</span>
                <svg width='24' height='24' fill='none' aria-hidden='true'>
                  <path
                    d='M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </button>
              <div
                style={{
                  position: 'fixed',
                  top: '1px',
                  left: '1px',
                  width: '1px',
                  height: '0',
                  padding: '0',
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  whiteSpace: 'nowrap',
                  borderWidth: '0',
                  display: 'none',
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className='flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]'>
          <button
            type='button'
            className='text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
            onClick={onOpenSidebarMobile}
          >
            <span className='sr-only'>Navigation</span>
            <svg width='24' height='24'>
              <path
                d='M5 6h14M5 12h14M5 18h14'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
            </svg>
          </button>
          <ol className='ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0'>
            <li className='flex items-center'>
              Diagno AI
              <svg
                width='3'
                height='6'
                aria-hidden='true'
                className='mx-3 overflow-visible text-slate-400'
              >
                <path
                  d='M0 0L3 3L0 6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                ></path>
              </svg>
            </li>
            <li className='font-semibold text-slate-900 truncate dark:text-slate-200'>Dashboard</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Header;

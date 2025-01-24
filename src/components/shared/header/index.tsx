'use client';

import React, { useCallback } from 'react';
import { useUser } from '@clerk/nextjs';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import useSidebarMobile from '../../../hooks/useSidebarMobile';
import useHeaderMobile from '../../../hooks/useHeaderMobile';
import UserBox from '../user-box';
import { ModeToggle } from '../mode-toggle';
import { DiagnoAIIcon } from '@/components/icons/icons';
type Props = {};

const Header = (props: Props) => {
  const { user } = useUser();
  const sidebarMobile = useSidebarMobile();
  const headerMobile = useHeaderMobile();

  const onOpenSidebarMobile = useCallback(() => {
    sidebarMobile.onOpen();
  }, [sidebarMobile]);

  const onOpenHeaderMobile = useCallback(() => {
    headerMobile.onOpen();
  }, [headerMobile]);

  return (
    <div className='sticky top-[44px] z-40 w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60'>
      <div className='max-w-8xl mx-auto'>
        <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
          <div className='relative flex items-center'>
            <a className='mr-3 flex-none  overflow-hidden md:w-auto' href='/'>
              <span className='sr-only'>Diagno AI</span>
              <DiagnoAIIcon className='md:w-[200px] md:h-[40px] w-[80px] h-[20px]' />
            </a>
            <div className='relative hidden lg:flex items-center ml-auto'>
              <nav className='text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200'>
                {/* <ul className='flex space-x-8'>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/docs/installation'
                    >
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://tailwindui.com/?ref=top'
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                    >
                      Developers
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
                </ul> */}
              </nav>
              <div className='flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800'>
                <ModeToggle />
                <div className='w-[25px] ml-5'>
                  {user?.id ? (
                    <UserBox />
                  ) : (
                    <Avatar className='cursor-pointer'>
                      <AvatarFallback>SB</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            </div>
            <button
              type='button'
              className='ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300'
            >
              <span className='sr-only'>Qidiruv</span>
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
                onClick={onOpenHeaderMobile}
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

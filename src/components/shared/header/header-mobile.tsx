'use client';

import React, { useCallback } from 'react';
import useHeaderbarMobile from '../../../hooks/useHeaderMobile';
import clsx from 'clsx';
import { ModeToggle } from '../mode-toggle';
import { useUser } from '@clerk/nextjs';
import UserBox from '../user-box';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const HeaderMobile = () => {
  const { user } = useUser();
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

          <div className='w-[25px] ml-5'>
            {user?.id ? (
              <UserBox />
            ) : (
              <Avatar className='cursor-pointer'>
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
            )}
          </div>
          <div className='mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10'>
            <div className='flex items-center justify-between'>
              <label htmlFor='theme' className='text-slate-700 font-normal dark:text-slate-400'>
                Switch theme
              </label>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;

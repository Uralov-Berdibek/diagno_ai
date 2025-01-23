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
    <div className='fixed top-[44px] z-40 w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]'>
      <div className='max-w-8xl mx-auto'>
        <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
          <div className='relative flex items-center'>
            <a className='mr-3 flex-none overflow-hidden md:w-auto' href='/'>
              <span className='sr-only'>Diagno AI</span>
              <DiagnoAIIcon className='md:w-[200px] md:h-[40px] w-[80px] h-[20px]' />
            </a>
            <div className='relative hidden lg:flex items-center ml-auto'>
              <nav className='text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200'></nav>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

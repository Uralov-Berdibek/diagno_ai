'use client';

import React, { useCallback } from 'react';
import SidebarItem from './sidebar-item';
import Documentation from './documentation';
import Image from 'next/image';

import useSidebarMobile from '../../../hooks/useSidebarMobile';
import clsx from 'clsx';
import { navItems } from '.';
import { DiagnoAIIcon } from '../../icons/icons';

const MobileSidebar = () => {
  const sidebarMobile = useSidebarMobile();

  const onCloseSidebarMobile = useCallback(() => {
    sidebarMobile.onClose();
  }, [sidebarMobile]);
  return (
    <div className={`${clsx(sidebarMobile.isOpen ? '' : 'hidden')} transition-all duration-1000`}>
      <div className='fixed z-50 inset-0 overflow-y-auto lg:hidden h-full'>
        <div className='fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80'></div>
        <div className='relative h-screen bg-white w-80 max-w-[calc(100%-3rem)] p-6 dark:bg-slate-800'>
          <button
            type='button'
            className='absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
            onClick={onCloseSidebarMobile}
          >
            <span className='sr-only'>Close navigation</span>
            <svg viewBox='0 0 10 10' className='w-2.5 h-2.5 overflow-visible'>
              <path
                d='M0 0L10 10M10 0L0 10'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
            </svg>
          </button>
          <nav id='nav' className='lg:text-sm lg:leading-6 relative pb-20'>
            <DiagnoAIIcon className='md:w-[200px] md:h-[40px] w-[80px] h-[20px] mb-8' />
            <ul>
              {navItems.map((item) => (
                <SidebarItem key={item.name} href={item.href} icon={item.icon} name={item.name} />
              ))}
            </ul>
            <Documentation />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;

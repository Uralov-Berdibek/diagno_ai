import React from 'react';
import Header from '../../components/shared/header';
import Sidebar from '../../components/shared/sidebar';
import MobileSidebar from '../../components/shared/sidebar/mobile-sidebar';
import HeaderMobile from '../../components/shared/header/header-mobile';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-[100vh] bg-white dark:bg-slate-800 text-slate-900 dark:text-white'>
      <Header />
      <HeaderMobile />
      <div className='overflow-hidden'>
        <Sidebar />
        <MobileSidebar />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;

import React from 'react';
import Header from '../../components/shared/header';
import Sidebar from '../../components/shared/sidebar';
import MobileSidebar from '../../components/shared/sidebar/mobile-sidebar';
import HeaderMobile from '../../components/shared/header/header-mobile';
import SearchModal from '../../components/modal/search-modal';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-[100vh] bg-white dark:bg-slate-800 text-slate-900 dark:text-white pb-8'>
      <Header />
      <HeaderMobile />
      <SearchModal />
      <div>
        <Sidebar />
        <MobileSidebar />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;

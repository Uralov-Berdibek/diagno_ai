import React from 'react';
import Header from '../../components/shared/header';
import HeaderMobile from '../../components/shared/header/header-mobile';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-[100vh] bg-white dark:bg-slate-800 text-slate-900 dark:text-white pb-8'>
      <Header />
      <HeaderMobile />
      <div className='container mx-auto'>{children}</div>
    </div>
  );
};

export default RootLayout;

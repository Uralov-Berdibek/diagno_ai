import React from 'react';
import Sidebar from '../../components/shared/sidebar';
import Header from '../../components/shared/header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-[100vh] flex bg-white dark:bg-slate-800 text-slate-900 dark:text-white'>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;

import React from 'react';
import Header from '../../components/shared/header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-[90vh]'>
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;

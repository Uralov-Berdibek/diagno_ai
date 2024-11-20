import React from 'react';
interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  return <div className='lg:container h-screen mx-auto lg:max-w-7xl'>{children}</div>;
};

export default Layout;

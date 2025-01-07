import React from 'react';
import Search from './search';
import SidebarItem from './sidebar-item';
import Documentation from './documentation';
import {
  ComunityIcon,
  CubeIcon,
  DocumentationIcon,
  ResourcesIcon,
  ScreencastsIcon,
  TemplatesIcon,
} from '../../icons/icons';

type Props = {};

export const navItems = [
  {
    name: 'Dashboard',
    href: '/dashboard', // Full path
    icon: <DocumentationIcon />,
  },
  {
    name: 'Chat Sahifalar',
    href: '/dashboard/files', // Full path
    icon: <CubeIcon />,
  },
  { name: 'Shifokorlar', href: '/dashboard/doctors', icon: <TemplatesIcon /> }, // Full path
  { name: 'Ta’lim', href: '/dashboard/trenning', icon: <ScreencastsIcon /> },
  { name: 'Manbalar', href: '/dashboard/resources', icon: <ResourcesIcon /> },
  { name: 'Muloqot', href: '/dashboard/comunity', icon: <ComunityIcon /> },
];

const Sidebar = (props: Props) => {
  return (
    <div className='hidden lg:block bg-white dark:bg-slate-900 fixed z-20 inset-0 top-[3.8125rem] left-0 w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto border-r border-slate-900/10 dark:border-slate-50/[0.06] '>
      <nav id='nav' className='lg:text-sm lg:leading-6 relative pb-20'>
        <Search />
        <ul>
          {navItems.map((item) => (
            <SidebarItem key={item.name} href={item.href} icon={item.icon} name={item.name} />
          ))}
        </ul>
      </nav>
      <Documentation />
    </div>
  );
};

export default Sidebar;

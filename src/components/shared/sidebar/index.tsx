import React from 'react';
import Search from './search';
import SidebarItem from './sidebar-item';
import Documentation from './documentation';
import {
  ComunityIcon,
  DocumentationIcon,
  PlaygroundIcon,
  ResourcesIcon,
  ScreencastsIcon,
  TemplatesIcon,
} from '../../icons/icons';

type Props = {};

export const navItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <DocumentationIcon />,
  },
  {
    name: 'Shablonlar',
    href: '/tamplates',
    icon: <TemplatesIcon />,
  },
  { name: 'Trening', href: '/screencasts', icon: <ScreencastsIcon /> },
  { name: 'Playground', href: '/playgraund', icon: <PlaygroundIcon /> },
  { name: 'Resurslar', href: '/resources', icon: <ResourcesIcon /> },
  { name: 'Community', href: '/resources', icon: <ComunityIcon /> },
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

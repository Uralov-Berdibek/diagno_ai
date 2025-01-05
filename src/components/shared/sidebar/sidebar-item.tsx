import Link from 'next/link';
import React from 'react';

type SidebarItemProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean; // Optional: Highlight the active link
};

const SidebarItem = ({ name, href, icon }: SidebarItemProps) => {
  return (
    <div>
      <li>
        <Link
          className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400'
          href={href}
        >
          <div className='mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10'>
            {icon}
          </div>
          {name}
        </Link>
      </li>
    </div>
  );
};

export default SidebarItem;

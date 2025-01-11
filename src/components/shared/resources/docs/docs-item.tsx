import React from 'react';

type DocsItemProps = {
  title: string;
  description: string;
  link: string;
  icon: {
    svgPath: string;
    color: string;
    iconColor: string;
  };
};

const DocsItem: React.FC<DocsItemProps> = ({ title, description, link, icon }) => {
  return (
    <li className='relative flex items-start p-4 dark:hover:bg-slate-900/15 hover:rounded-t-lg'>
      <span
        className={`inline-flex items-center justify-center p-2 ${icon.color} rounded-md shadow-lg`}
      >
        <svg
          className={`h-6 w-6 ${icon.iconColor}`}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={icon.svgPath}
          ></path>
        </svg>
      </span>
      <div className='peer group flex-auto ml-6'>
        <h3 className='mb-2 font-semibold text-slate-900 dark:text-slate-200'>
          <a
            className='before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4'
            href={link}
          >
            {title}
            <svg
              viewBox='0 0 3 6'
              className='ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
            >
              <path
                d='M0 0L3 3L0 6'
                fill='none'
                strokeWidth='2'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </a>
        </h3>
        <div className='prose prose-slate prose-sm text-slate-600 dark:text-slate-400 dark:prose-dark'>
          <p>{description}</p>
        </div>
      </div>
      <div className='absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4'></div>
    </li>
  );
};

export default DocsItem;

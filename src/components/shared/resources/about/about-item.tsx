import React from 'react';
import Image from 'next/image';

type AboutItemProps = {
  title: string;
  subtitle: string;
  description: string[];
  link: string;
  imageUrl: string;
  imageAlt: string;
};

const AboutItem: React.FC<AboutItemProps> = ({
  title,
  subtitle,
  description,
  link,
  imageUrl,
  imageAlt,
}) => {
  return (
    <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-700/15'>
      <div className='flex-auto'>
        <h3 className='mb-4 text-sm leading-6 font-semibold text-blue-500'>{title}</h3>
        <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>
          {subtitle}
        </p>
        <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <a
          className='group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500'
          href={link}
        >
          Batafsil ma&#39;lumot<span className='sr-only'>, {title}</span>
          <svg
            className='overflow-visible ml-3 text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400'
            width='3'
            height='6'
            viewBox='0 0 3 6'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M0 0L3 3L0 6'></path>
          </svg>
        </a>
      </div>
      <div className='w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]'>
        <div className='aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800'>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={1216} // Kenglik belgilangan
            height={606} // Balandlik belgilangan
            className='h-full w-full'
            priority // LCP uchun optimallashtirilgan yuklash
          />
        </div>
      </div>
    </li>
  );
};

export default AboutItem;

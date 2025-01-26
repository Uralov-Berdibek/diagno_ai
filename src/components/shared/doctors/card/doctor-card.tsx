import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DoctorCardProps {
  name: string;
  clinic: string;
  specialty: string;
  image: string;
  slug: number;
}

export default function DoctorCard({ name, clinic, specialty, image, slug }: DoctorCardProps) {
  return (
    <div className='w-full max-w-sm bg-white border border-slate-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700'>
      <div className='flex justify-end px-4 pt-4'>
        <button
          id='likeButton'
          className='inline-block text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-200 dark:focus:ring-slate-700 rounded-lg text-sm p-1.5'
          type='button'
        >
          <span className='sr-only'>Like</span>
          <svg
            className={`w-6 h-6 opacity-10`}
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z'
            />
          </svg>
        </button>
      </div>
      <div className='flex flex-col items-center pb-10'>
        <Image
          className='w-40 h-48 mb-3 rounded-md'
          src={image}
          alt={name}
          width={96}
          height={96}
        />
        <h5 className='mb-1 text-xl font-medium text-slate-900 dark:text-white'>{name}</h5>
        <span className='text-sm text-slate-500 dark:text-slate-400'>{`${clinic} - ${specialty}`}</span>
        <div className='flex mt-4 md:mt-6'>
          <Link
            href={`doctors/${slug}`}
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Profilni ko&#39;rish
          </Link>
          <a
            href='#'
            className='py-2 px-4 ms-2 text-sm font-medium text-slate-900 focus:outline-none bg-white rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-slate-100 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700'
          >
            Bo&#39;g&#39;lanish
          </a>
        </div>
      </div>
    </div>
  );
}

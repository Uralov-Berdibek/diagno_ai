import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const DocumentationIcon: React.FC<IconProps> = (props) => (
  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z'
      className='fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300'
    ></path>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z'
      className='fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200'
    ></path>
  </svg>
);

export const TemplatesIcon: React.FC<IconProps> = (props) => (
  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.5C11.0523 18 11.5 17.5523 11.5 17V12C11.5 10.6193 12.6193 9.5 14 9.5H18V8C18 6.89543 17.1046 6 16 6H8ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.01C8.42421 7.25 8.76 7.58579 8.76 8C8.76 8.41421 8.42421 8.75 8.01 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H10.01C10.4242 8.75 10.76 8.41421 10.76 8C10.76 7.58579 10.4242 7.25 10.01 7.25H10Z'
      fill='#E879F9'
      className='fill-fuchsia-400 group-hover:fill-fuchsia-500 dark:group-hover:fill-fuchsia-300 dark:fill-slate-400'
    ></path>
    <path
      d='M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V12Z'
      fill='#F0ABFC'
      className='fill-fuchsia-300 group-hover:fill-fuchsia-400 dark:fill-slate-500'
    ></path>
  </svg>
);

export const ScreencastsIcon: React.FC<IconProps> = (props) => (
  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
      className='fill-pink-400 group-hover:fill-pink-500 dark:group-hover:fill-pink-300 dark:fill-slate-600'
    ></path>
    <path
      d='M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z'
      className='fill-pink-50 group-hover:fill-pink-100 dark:group-hover:fill-white dark:fill-slate-400'
    ></path>
  </svg>
);

export const PlaygroundIcon: React.FC<IconProps> = (props) => (
  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
    <path
      d='M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z'
      className='fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-400 dark:fill-slate-600'
    ></path>
    <path
      d='M10.25 9.75 7.75 12l2.5 2.25'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='stroke-blue-50 dark:group-hover:stroke-white dark:stroke-slate-400'
    ></path>
    <path
      d='m13.75 9.75 2.5 2.25-2.5 2.25'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='stroke-blue-200 dark:group-hover:stroke-white dark:stroke-slate-400'
    ></path>
  </svg>
);

export const ResourcesIcon: React.FC<IconProps> = (props) => (
  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
    <path
      d='M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z'
      className='fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-slate-600'
    ></path>
    <path
      d='M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z'
      className='fill-purple-200 group-hover:fill-purple-300 dark:group-hover:fill-white dark:fill-slate-400'
    ></path>
    <path
      d='M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z'
      className='fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-slate-600'
    ></path>
  </svg>
);

export const ComunityIcon: React.FC<IconProps> = (props) => (
  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z'
      className='fill-violet-400 group-hover:fill-violet-500 dark:group-hover:fill-violet-300 dark:fill-slate-600'
    ></path>
    <circle
      cx='12'
      cy='11'
      r='1'
      className='fill-white dark:group-hover:fill-white dark:fill-slate-400'
    ></circle>
    <circle
      cx='9'
      cy='11'
      r='1'
      className='fill-violet-200 dark:group-hover:fill-white dark:fill-slate-400'
    ></circle>
    <circle
      cx='15'
      cy='11'
      r='1'
      className='fill-violet-200 dark:fill-slate-400 dark:group-hover:fill-white'
    ></circle>
  </svg>
);

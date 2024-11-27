import Image from 'next/image';
import React from 'react';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className='w-[19rem] bg-gray-100 dark:bg-slate-900 hidden lg:block fixed z-20 inset-0 top-0 left-0 right-auto pb-10 pl-8 pr-8 overflow-y-auto'>
      <Image
        src='/corinna-ai-logo.png'
        alt='Diagno AI'
        width={200}
        height={70}
        className='h-auto mt-6'
        priority
      />

      <nav id='nav' className='lg:text-sm lg:leading-6 relative pb-20'>
        <div className='sticky top-0 -ml-0.5 pointer-events-none'>
          <div className='h-10 bg-gray-100 dark:bg-slate-900'></div>
          <div className='bg-gray-100 dark:bg-slate-900 relative pointer-events-auto'>
            <button
              type='button'
              className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700'
            >
              <svg width='24' height='24' fill='none' aria-hidden='true' className='mr-3 flex-none'>
                <path
                  d='m19 19-3.5-3.5'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <circle
                  cx='11'
                  cy='11'
                  r='6'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></circle>
              </svg>
              Quick search...
              <span className='ml-auto pl-3 flex-none text-xs font-semibold'>Ctrl K</span>
            </button>
          </div>
          <div className='h-8 bg-gradient-to-b from-gray-100 dark:from-slate-900'></div>
        </div>

        <ul className='mt-6'>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400'
              href='/docs/installation'
            >
              <div className='mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10'>
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
              </div>
              Recents
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              href='https://tailwindui.com/components?ref=sidebar'
            >
              <div className='mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-purple-200 dark:group-hover:bg-purple-400 dark:bg-slate-800 dark:highlight-white/5'>
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
              </div>
              Files
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              href='https://tailwindui.com/templates?ref=sidebar'
            >
              <div className='mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-fuchsia-200 dark:group-hover:bg-fuchsia-600 dark:bg-slate-800 dark:highlight-white/5'>
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
              </div>
              Templates
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              href='https://www.youtube.com/tailwindlabs'
            >
              <div className='mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-pink-200 dark:group-hover:bg-pink-500 dark:bg-slate-800 dark:highlight-white/5'>
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
              </div>
              Results
            </a>
          </li>
          <li>
            <a
              className='group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              href='https://github.com/tailwindlabs/tailwindcss/discussions'
            >
              <div className='mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-violet-200 dark:group-hover:bg-violet-500 dark:bg-slate-800 dark:highlight-white/5'>
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
              </div>
              Community
            </a>
          </li>
        </ul>
      </nav>

      <div className='fixed bottom-0 left-0 right-auto w-[19rem] pl-8 pr-8'>
        <a
          className='group relative px-4 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium text-sm grid overflow-hidden border border-white/10 shadow-lg'
          href='/docs/v4-beta'
        >
          <div className='grid gap-1 z-20'>
            <p>Diagno AI Documentation →</p>
            <p className='text-[0.8125rem] text-gray-300'>Preview the next Diagno AI.</p>
          </div>
          <div className='absolute h-full w-1/2 right-0 top-0 overflow-hidden'>
            <div className='absolute h-full w-full bg-gradient-to-r from-slate-800 group-hover:from-slate-900 z-10'></div>
            <svg
              className='absolute -top-4 -right-12'
              width='165'
              height='96'
              viewBox='0 0 165 96'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M93.0301 63.4105L93.0301 68.4739L93.0301 71.0057L93.0301 73.5374M93.0301 63.4105L98.1919 64.0006L118.345 66.3044C117.631 66.8832 116.863 67.5034 116.066 68.1028C106.209 75.5238 98.2194 77.4462 93.1673 73.6427C93.1209 73.6078 93.0752 73.5727 93.0301 73.5374M93.0301 63.4105C91.1447 65.8643 90.3565 68.0662 90.6924 69.9794C90.9258 71.3089 91.702 72.499 93.0301 73.5374M134.46 56.3822C134.54 52.8176 132.712 49.5452 128.943 46.7081C119.773 39.8039 107.225 41.5196 93.991 51.4832C85.6034 57.798 81.6091 63.8977 82.1263 69.2752M134.46 56.3822C134.347 61.4664 130.353 67.1449 122.574 73.0019C121.155 74.07 119.744 75.0435 118.345 75.9219C108.076 82.3698 98.4237 83.6975 90.6924 79.7446C89.6313 79.2021 88.6064 78.5601 87.6211 77.8183C84.2507 75.2809 82.4268 72.4 82.1263 69.2752M134.46 56.3822L134.462 62.5849C134.523 67.7552 130.527 73.5562 122.574 79.5439C109.312 89.5281 96.7642 91.2438 87.6211 84.3603C84.1199 81.7244 82.2875 78.7178 82.0982 75.4522L82.1263 69.2752M100.498 56.3823C99.6746 57.0024 98.9058 57.6225 98.1919 58.2013L106.218 59.132L123.507 61.1366C124.092 60.3785 124.571 59.6441 124.944 58.9349C125.631 57.6314 125.96 56.4127 125.932 55.287C125.89 53.6019 125.046 52.1251 123.397 50.8837C118.318 47.0595 110.328 48.982 100.498 56.3823Z'
                stroke='#626973'
                strokeWidth='0.5'
              ></path>
              <path
                d='M60.6665 50.0558L55.0653 45.8389M60.6665 50.0558L66.103 45.9629V42.1073M60.6665 50.0558V46.2002M55.0653 45.8389L47.2127 51.7508M55.0653 45.8389V41.9832M47.2127 51.7508L41.0624 47.1205L41.0624 43.2649M47.2127 51.7508V47.8952M41.0624 43.2649L48.915 37.3529L43.5884 33.3427L36.3673 27.9061L31.0681 23.9166M41.0624 43.2649L47.2127 47.8952M41.0624 43.2649L46.4059 39.2419L31.0681 27.7722L31.0681 23.9166M31.0681 23.9166L36.3673 19.9271L75.4382 9.48809L82.1651 14.5525M82.1651 14.5525L82.1652 18.4082L47.1721 27.7722M82.1651 14.5525L75.4382 16.3501L44.0277 24.7434L43.5884 25.0742L47.1721 27.7722M71.0452 29.8699L65.1145 25.4049L54.5711 33.3427L47.1721 27.7722M71.0452 29.8699L60.4469 37.849L66.103 42.1073M71.0452 29.8699V32.1251V33.7255L63.1771 39.9045L66.103 42.1073M66.103 42.1073L60.6665 46.2002M60.6665 46.2002L60.4469 46.0348L55.0653 41.9832M55.0653 41.9832L54.5711 42.3553L48.915 46.6136L47.2127 47.8952'
                stroke='#626973'
                strokeWidth='0.5'
              ></path>
              <path
                d='M79.8241 57.5565C79.813 56.0436 79.0577 54.543 77.5518 53.4092C74.4766 51.0941 69.3697 51.1354 66.2396 53.4919C64.5949 54.7302 63.7916 56.3851 63.8458 58.0128M79.8241 57.5565V57.6245M79.8241 57.5565C79.8243 57.5792 79.8243 57.6018 79.8241 57.6245M63.8458 58.0128C63.8948 59.4828 64.643 60.9305 66.1023 62.0291C69.1775 64.3443 74.3119 64.2823 77.4419 61.9258C79.0163 60.7405 79.8127 59.1787 79.8241 57.6245M63.8458 58.0128L63.8458 61.8684C63.8948 63.3384 64.643 64.7861 66.1023 65.8848C69.1775 68.2 74.3119 68.1379 77.4419 65.7814C79.0392 64.5789 79.8357 62.9888 79.8241 61.4121L79.8241 57.6245'
                stroke='#626973'
                strokeWidth='0.5'
              ></path>
            </svg>
          </div>
        </a>
        <div className='h-6 bg-gradient-to-t from-white to-white/60 dark:from-slate-900 dark:to-slate-900/60'></div>
      </div>
    </div>
  );
};

export default Sidebar;

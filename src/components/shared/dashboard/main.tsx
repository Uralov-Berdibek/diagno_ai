import React from 'react';

const MainSection = () => {
  return (
    <section className='relative'>
      <h2 className='text-slate-900 text-xl font-bold mb-3 dark:text-slate-200 ml-4 tracking-wider'>
        Shaxsiy sog&#39;liqni tahlil paneli
      </h2>
      <div className='mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark ml-4'>
        <p>
          AI yordamida tibbiy natijalar va yozuvlarni tahlil qilib, siz va oilangizning sog&#39;ligi
          haqida chuqur tushuncha hosil qiling.
        </p>
      </div>
      <ul className='mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10'>
        <li className='relative flex items-start p-4 dark:hover:bg-slate-900/15 hover:rounded-t-lg'>
          <span className='inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg'>
            <svg
              className='h-6 w-6 text-white'
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
                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              ></path>
            </svg>
          </span>
          <div className='peer group flex-auto ml-6'>
            <h3 className='mb-2 font-semibold text-slate-900 dark:text-slate-200'>
              <a
                className='before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4'
                href='/docs/utility-first'
              >
                Diagno AI-dan qanday foydalanish kerak.
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
              <p>Analiz natijalarini yuklab, AI yordamida chuqur tahlil va izohlarni oling.</p>
            </div>
          </div>
          <div className='absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4'></div>
        </li>
        <li className='relative flex items-start p-4 dark:hover:bg-slate-900/15 hover:rounded-t-lg'>
          <span className='inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg'>
            <svg
              className='h-6 w-6 text-white'
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
                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              ></path>
            </svg>
          </span>
          <div className='peer group flex-auto ml-6'>
            <h3 className='mb-2 font-semibold text-slate-900 dark:text-slate-200'>
              <a
                className='before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4'
                href='/docs/responsive-design'
              >
                Diagno AI qanday ishlayi.
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
              <p>
                O&#39;zingizning sog&#39;lig&#39;ingiz haqida yozing va AI tahlilidan foydalaning.
              </p>
            </div>
          </div>
          <div className='absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4'></div>
        </li>
      </ul>
    </section>
  );
};

export default MainSection;

import React from 'react';

const MainSection = () => {
  return (
    <section className='relative'>
      <h2 className='text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200'>
        What to read next
      </h2>
      <div className='mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark'>
        <p>
          Get familiar with some of the core concepts that make Tailwind CSS different from writing
          traditional CSS.
        </p>
      </div>
      <ul className='mt-10 grid grid-cols-1 gap-x-16 gap-y-8 xl:grid-cols-2 xl:gap-y-10'>
        <li className='relative flex items-start'>
          <div className='w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20'>
            <div
              className='aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden'
              style={{
                backgroundImage: `url(/customization.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
              }}
            ></div>
            <div
              className='hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block'
              style={{
                backgroundImage: `url(/customization.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh', // Example height
              }}
            ></div>
          </div>
          <div className='peer group flex-auto ml-6'>
            <h3 className='mb-2 font-semibold text-slate-900 dark:text-slate-200'>
              <a
                className='before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4'
                href='/docs/utility-first'
              >
                Utility-First Fundamentals
                <svg
                  viewBox='0 0 3 6'
                  className='ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
                >
                  <path
                    d='M0 0L3 3L0 6'
                    fill='none'
                    stroke-width='2'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>
            </h3>
            <div className='prose prose-slate prose-sm text-slate-600 dark:prose-dark'>
              <p>
                Using a utility-first workflow to build complex components from a constrained set of
                primitive utilities.
              </p>
            </div>
          </div>
          <div className='absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4'></div>
        </li>
        <li className='relative flex items-start'>
          <div className='w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex-none dark:bg-indigo-500 dark:highlight-white/20'>
            <div
              className='aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden'
              style={{
                backgroundImage: `url(/spectronlabs.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
              }}
            ></div>
            <div
              className='hidden aspect-w-1 aspect-h-1 bg-[length:100%] dark:block'
              style={{
                backgroundImage: `url(/spectronlabs.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
              }}
            ></div>
          </div>
          <div className='peer group flex-auto ml-6'>
            <h3 className='mb-2 font-semibold text-slate-900 dark:text-slate-200'>
              <a
                className='before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4'
                href='/docs/responsive-design'
              >
                Responsive Design
                <svg
                  viewBox='0 0 3 6'
                  className='ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
                >
                  <path
                    d='M0 0L3 3L0 6'
                    fill='none'
                    stroke-width='2'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </a>
            </h3>
            <div className='prose prose-slate prose-sm text-slate-600 dark:prose-dark'>
              <p>
                Build fully responsive user interfaces that adapt to any screen size using
                responsive modifiers.
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

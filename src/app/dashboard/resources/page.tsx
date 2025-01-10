import Image from 'next/image';
import React from 'react';
import Footer from '../../../components/shared/footer';

type Props = {};

const ResourcesPage = (props: Props) => {
  return (
    <div className='lg:pl-[21rem] pr-6 py-4'>
      <main className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <header className='mb-20 max-w-xl'>
          <p className='mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400'>
            Resources
          </p>
          <h1 className='mb-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200'>
            Everything else you need to build awesome Tailwind CSS websites
          </h1>
          <p className='text-lg text-slate-700 dark:text-slate-400'>
            We think Tailwind is an amazing CSS framework, but you need more than just a CSS
            framework to produce visually awesome work.
          </p>
        </header>
        <div className='space-y-16'>
          <section>
            <h2 className='mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200'>
              Design resources
            </h2>
            <div className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark'>
              <p>
                Design is hard so we made a few resources to help you with it. These resources are a
                great way to help you with your designs and a great way to support the development
                of the framework.
              </p>
            </div>
            <ul className='sm:space-y-6'>
              <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-700/15'>
                <div className='flex-auto'>
                  <h3 className='mb-4 text-sm leading-6 font-semibold text-blue-500'>
                    Refactoring UI
                  </h3>
                  <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>
                    Learn UI Design
                  </p>
                  <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>
                      Refactoring UI is a design-for-developers book + video series put together by
                      Adam Wathan and Steve Schoger. It covers literally everything we know about
                      making things look awesome.
                    </p>
                    <p>
                      Almost 10,000 people have picked it up so far and have all sorts of awesome
                      things to say about how it helped them improve their work.
                    </p>
                  </div>
                  <a
                    className='group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500'
                    href='#'
                  >
                    Learn more<span className='sr-only'>, Refactoring UI</span>
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
                      src='https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg'
                      alt='Image'
                      className='h-full w-full'
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </li>
              <li className='-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-700/15'>
                <div className='flex-auto'>
                  <h3 className='mb-4 text-sm leading-6 font-semibold text-blue-500'>
                    Refactoring UI
                  </h3>
                  <p className='mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200'>
                    Learn UI Design
                  </p>
                  <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
                    <p>
                      Refactoring UI is a design-for-developers book + video series put together by
                      Adam Wathan and Steve Schoger. It covers literally everything we know about
                      making things look awesome.
                    </p>
                    <p>
                      Almost 10,000 people have picked it up so far and have all sorts of awesome
                      things to say about how it helped them improve their work.
                    </p>
                  </div>
                  <a
                    className='group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500'
                    href='#'
                  >
                    Learn more<span className='sr-only'>, Refactoring UI</span>
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
                      src='https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg'
                      alt='Image'
                      className='h-full w-full'
                      width={200}
                      height={40}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <h2 className='mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200'>
              Additional resources
            </h2>
            <div className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark'>
              <p>
                Tailwind isn&#39t the only open-source project we maintain. We&#39ve made a few
                other resources to help you with your design and development workflow.
              </p>
            </div>
            <ul className='grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start'>
              <li className='relative flex flex-col sm:flex-row xl:flex-col items-start'>
                <div className='order-1 sm:ml-6 xl:ml-0'>
                  <h3 className='mb-1 text-slate-900 font-semibold dark:text-slate-200'>
                    <span className='mb-1 block text-sm leading-6 text-indigo-500'>
                      Headless UI
                    </span>
                    Completely unstyled, fully accessible UI components
                  </h3>
                  <div className='prose prose-slate prose-sm text-slate-600 dark:prose-dark'>
                    <p>
                      Completely unstyled, fully accessible UI components, designed to integrate
                      beautifully with Tailwind CSS.
                    </p>
                  </div>
                  <a
                    className='group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6'
                    href='https://headlessui.dev'
                  >
                    Learn more
                    <span className='sr-only'>
                      , Completely unstyled, fully accessible UI components
                    </span>
                    <svg
                      className='overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400'
                      width='3'
                      height='6'
                      viewBox='0 0 3 6'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M0 0L3 3L0 6'></path>
                    </svg>
                  </a>
                </div>
                <img
                  src='/_next/static/media/headlessui@75.c1d50bc1.jpg'
                  alt=''
                  className='mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full'
                  width='1216'
                  height='640'
                />
              </li>
              <li className='relative flex flex-col sm:flex-row xl:flex-col items-start'>
                <div className='order-1 sm:ml-6 xl:ml-0'>
                  <h3 className='mb-1 text-slate-900 font-semibold dark:text-slate-200'>
                    <span className='mb-1 block text-sm leading-6 text-purple-500'>Heroicons</span>
                    Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
                  </h3>
                  <div className='prose prose-slate prose-sm text-slate-600 dark:prose-dark'>
                    <p>
                      A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and
                      via first-party React and Vue libraries.
                    </p>
                  </div>
                  <a
                    className='group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6'
                    href='https://heroicons.com'
                  >
                    Learn more
                    <span className='sr-only'>
                      , Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
                    </span>
                    <svg
                      className='overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400'
                      width='3'
                      height='6'
                      viewBox='0 0 3 6'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M0 0L3 3L0 6'></path>
                    </svg>
                  </a>
                </div>
                <img
                  src='/_next/static/media/heroicons@75.4a558f35.jpg'
                  alt=''
                  className='mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full'
                  width='1216'
                  height='640'
                />
              </li>
              <li className='relative flex flex-col sm:flex-row xl:flex-col items-start'>
                <div className='order-1 sm:ml-6 xl:ml-0'>
                  <h3 className='mb-1 text-slate-900 font-semibold dark:text-slate-200'>
                    <span className='mb-1 block text-sm leading-6 text-cyan-500'>
                      Hero Patterns
                    </span>
                    Seamless SVG background patterns by the makers of Tailwind CSS.
                  </h3>
                  <div className='prose prose-slate prose-sm text-slate-600 dark:prose-dark'>
                    <p>
                      A collection of over 100 free MIT-licensed high-quality SVG patterns for you
                      to use in your web projects.
                    </p>
                  </div>
                  <a
                    className='group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6'
                    href='https://heropatterns.com'
                  >
                    Learn more
                    <span className='sr-only'>
                      , Seamless SVG background patterns by the makers of Tailwind CSS.
                    </span>
                    <svg
                      className='overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400'
                      width='3'
                      height='6'
                      viewBox='0 0 3 6'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M0 0L3 3L0 6'></path>
                    </svg>
                  </a>
                </div>
                <img
                  src='/_next/static/media/heropatterns@75.82a09697.jpg'
                  alt=''
                  className='mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full'
                  width='1216'
                  height='640'
                />
              </li>
            </ul>
          </section>
          <section className='border-t border-slate-100 pt-16 dark:border-slate-200/5'>
            <h2 className='mb-2 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200'>
              Connect and contribute
            </h2>
            <div className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark'>
              <p>
                Whether you're a beginner or an advanced user, getting involved in the Tailwind
                community is a great way to connect with like-minded folks who are building awesome
                things with the framework.
              </p>
            </div>
            <ul className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2'>
              <li className='relative flex flex-row-reverse'>
                <div className='peer group flex-auto ml-6'>
                  <h3 className='mb-2 font-semibold text-slate-900 dark:text-slate-200'>
                    <a
                      href='/discord'
                      className='before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4'
                    >
                      Discord
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
                  <p className='text-sm leading-6 text-slate-600 dark:text-slate-400'>
                    Join over 10,000 members on the Discord group to chat about Tailwind and other
                    related topics.
                  </p>
                </div>
                <div className='flex-none w-16 h-16 p-[0.1875rem] rounded-full shadow overflow-hidden pointer-events-none ring-1 ring-slate-900/10 dark:bg-indigo-500 dark:ring-0 dark:highlight-white/20'>
                  <div className='relative pt-full rounded-full ring-1 ring-inset ring-slate-900/5 bg-[#838CF1]/[0.15] dark:bg-indigo-700'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <svg
                        viewBox='0 0 24 26'
                        fill='#838CF1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-auto dark:fill-indigo-200'
                      >
                        <path d='M9.434 10C8.632 10 8 10.675 8 11.5S8.646 13 9.434 13c.801 0 1.434-.675 1.434-1.5.014-.825-.633-1.5-1.434-1.5zm5.132 0c-.801 0-1.434.675-1.434 1.5s.646 1.5 1.434 1.5c.802 0 1.434-.675 1.434-1.5s-.632-1.5-1.434-1.5z'></path>
                        <path d='M21.188 0H2.812c-.37 0-.737.07-1.078.206a2.832 2.832 0 00-.913.58 2.666 2.666 0 00-.609.869A2.55 2.55 0 000 2.677v17.577c0 .351.071.698.212 1.023.141.324.348.62.609.868s.571.446.913.58c.341.136.708.206 1.078.206h15.55l-.726-2.404 1.756 1.547 1.659 1.456L24 26V2.678c0-.35-.071-.698-.212-1.022a2.667 2.667 0 00-.609-.868 2.833 2.833 0 00-.913-.581A2.953 2.953 0 0021.188 0zm-5.294 16.978s-.493-.559-.905-1.053c1.797-.481 2.482-1.547 2.482-1.547a7.997 7.997 0 01-1.577.766 9.396 9.396 0 01-1.988.56c-1.175.205-2.38.2-3.552-.013a11.992 11.992 0 01-2.016-.559 8.246 8.246 0 01-1-.442c-.043-.026-.083-.04-.124-.065a.173.173 0 01-.055-.039c-.247-.13-.384-.221-.384-.221s.659 1.04 2.4 1.534c-.412.494-.92 1.079-.92 1.079-3.03-.09-4.181-1.976-4.181-1.976 0-4.186 1.974-7.58 1.974-7.58C8.023 6.02 9.9 6.059 9.9 6.059l.138.157C7.57 6.89 6.432 7.917 6.432 7.917s.301-.156.809-.377c1.467-.61 2.633-.78 3.113-.819.083-.013.15-.026.234-.026a11.704 11.704 0 016.898 1.223s-1.085-.976-3.416-1.653l.193-.207s1.88-.04 3.853 1.365c0 0 1.975 3.394 1.975 7.579 0 0-1.166 1.885-4.197 1.976z'></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4'></div>
              </li>
              <li className='relative flex flex-row-reverse'>
                <div className='peer group flex-auto ml-6'>
                  <h3 className='mb-2 font-semibold text-slate-900 dark:text-slate-200'>
                    <a
                      href='https://github.com/tailwindlabs/tailwindcss/discussions'
                      className='before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4'
                    >
                      GitHub Discussions
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
                  <p className='text-sm leading-6 text-slate-600 dark:text-slate-400'>
                    Have an issue with your project? Connect with other members of the Tailwind
                    community to get some assistance.
                  </p>
                </div>
                <div className='flex-none w-16 h-16 p-[0.1875rem] rounded-full shadow overflow-hidden pointer-events-none ring-1 ring-slate-900/10 dark:bg-slate-600 dark:ring-0 dark:highlight-white/20'>
                  <div className='relative pt-full rounded-full ring-1 ring-inset ring-slate-900/5 bg-slate-100 dark:bg-slate-800'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <svg
                        viewBox='0 0 28 28'
                        fill='#0F172A'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-7 h-auto dark:fill-slate-400'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M14 0C6.265 0 0 6.265 0 14c0 6.195 4.008 11.427 9.572 13.282.7.123.963-.297.963-.665 0-.332-.018-1.434-.018-2.607-3.517.647-4.427-.858-4.707-1.645-.157-.402-.84-1.645-1.435-1.977-.49-.263-1.19-.91-.018-.928 1.103-.018 1.89 1.015 2.153 1.435 1.26 2.117 3.273 1.523 4.078 1.155.122-.91.49-1.523.892-1.873-3.115-.35-6.37-1.557-6.37-6.912 0-1.523.542-2.783 1.435-3.763-.14-.35-.63-1.785.14-3.71 0 0 1.173-.367 3.85 1.436a12.99 12.99 0 013.5-.473c1.19 0 2.38.157 3.5.473 2.677-1.82 3.85-1.435 3.85-1.435.77 1.925.28 3.36.14 3.71.893.98 1.435 2.222 1.435 3.762 0 5.372-3.273 6.563-6.387 6.912.507.438.944 1.278.944 2.59 0 1.873-.017 3.378-.017 3.85 0 .368.262.805.962.665A14.022 14.022 0 0028 14c0-7.735-6.265-14-14-14z'
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4'></div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;

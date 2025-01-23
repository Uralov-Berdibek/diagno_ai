import React from 'react';
import Footer from '../../components/shared/footer';
import Docs from '../../components/shared/resources/docs';

const docs = () => {
  return (
    <div>
      <h1 className='mb-4 text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl lg:text- mt-[116px]'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          Better Data
        </span>{' '}
        Scalable AI.
      </h1>

      <div className='mt-10'>
        <p className='text-slate-500 dark:text-slate-400 text-justify'>
          Track work across the enterprise through an open, collaborative platform. Link issues
          across Jira and ingest data from other software development tools, so your IT support and
          operations teams have richer contextual information to rapidly respond to requests,
          incidents, and changes. Track work across the enterprise through an open, collaborative
          platform. Link issues across Jira and ingest data from other software development tools,
          so your IT support and operations teams have richer contextual information to rapidly
          respond to requests, incidents, and changes.
        </p>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />
        <p className='text-gray-500 dark:text-gray-400 text-justify'>
          Deliver great service experiences fast - without the complexity of traditional ITSM
          solutions.Accelerate critical development work, eliminate toil, and deploy changes with
          ease, with a complete audit trail for every change. Track work across the enterprise
          through an open, collaborative platform. Link issues across Jira and ingest data from
          other software development tools, so your IT support and operations teams have richer
          contextual information to rapidly respond to requests, incidents, and changes.
        </p>
      </div>

      <div className='mt-10'>
        <h2 className='relative group text-2xl'>
          Default timepicker
          <span id='default-timepicker' className='absolute -top-[140px]'></span>{' '}
          <a
            className='ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100'
            href='#default-timepicker'
            aria-label='Link to this section: Default timepicker'
          >
            #
          </a>
        </h2>

        <video className='w-full mt-4' autoPlay controls>
          <source src='/docs/videos/flowbite.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='mt-10'>
        <p className='text-slate-500 dark:text-slate-400 text-justify'>
          Track work across the enterprise through an open, collaborative platform. Link issues
          across Jira and ingest data from other software development tools, so your IT support and
          operations teams have richer contextual information to rapidly respond to requests,
          incidents, and changes. Track work across the enterprise through an open, collaborative
          platform. Link issues across Jira and ingest data from other software development tools,
          so your IT support and operations teams have richer contextual information to rapidly
          respond to requests, incidents, and changes.
        </p>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />
        <p className='text-gray-500 dark:text-gray-400 text-justify'>
          Deliver great service experiences fast - without the complexity of traditional ITSM
          solutions.Accelerate critical development work, eliminate toil, and deploy changes with
          ease, with a complete audit trail for every change. Track work across the enterprise
          through an open, collaborative platform. Link issues across Jira and ingest data from
          other software development tools, so your IT support and operations teams have richer
          contextual information to rapidly respond to requests, incidents, and changes.
        </p>
      </div>

      <div className='my-10' id='accordion-open' data-accordion='open'>
        <h2 id='accordion-open-heading-1'>
          <button
            type='button'
            className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
            data-accordion-target='#accordion-open-body-1'
            aria-expanded='true'
            aria-controls='accordion-open-body-1'
          >
            <span className='flex items-center'>
              <svg
                className='w-5 h-5 me-2 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                  clipRule='evenodd'
                ></path>
              </svg>{' '}
              What is Flowbite?
            </span>
            <svg
              data-accordion-icon
              className='w-3 h-3 rotate-180 shrink-0'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5 5 1 1 5'
              />
            </svg>
          </button>
        </h2>
        <div
          id='accordion-open-body-1'
          className='hidden'
          aria-labelledby='accordion-open-heading-1'
        >
          <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              Flowbite is an open-source library of interactive components built on top of Tailwind
              CSS including buttons, dropdowns, modals, navbars, and more.
            </p>
            <p className='text-gray-500 dark:text-gray-400'>
              Check out this guide to learn how to{' '}
              <a
                href='/docs/getting-started/introduction/'
                className='text-blue-600 dark:text-blue-500 hover:underline'
              >
                get started
              </a>{' '}
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 id='accordion-open-heading-2'>
          <button
            type='button'
            className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
            data-accordion-target='#accordion-open-body-2'
            aria-expanded='false'
            aria-controls='accordion-open-body-2'
          >
            <span className='flex items-center'>
              <svg
                className='w-5 h-5 me-2 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                  clipRule='evenodd'
                ></path>
              </svg>
              Is there a Figma file available?
            </span>
            <svg
              data-accordion-icon
              className='w-3 h-3 rotate-180 shrink-0'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5 5 1 1 5'
              />
            </svg>
          </button>
        </h2>
        <div
          id='accordion-open-body-2'
          className='hidden'
          aria-labelledby='accordion-open-heading-2'
        >
          <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700'>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              Flowbite is first conceptualized and designed using the Figma software so everything
              you see in the library has a design equivalent in our Figma file.
            </p>
            <p className='text-gray-500 dark:text-gray-400'>
              Check out the{' '}
              <a
                href='https://flowbite.com/figma/'
                className='text-blue-600 dark:text-blue-500 hover:underline'
              >
                Figma design system
              </a>{' '}
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </div>
        <h2 id='accordion-open-heading-3'>
          <button
            type='button'
            className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
            data-accordion-target='#accordion-open-body-3'
            aria-expanded='false'
            aria-controls='accordion-open-body-3'
          >
            <span className='flex items-center'>
              <svg
                className='w-5 h-5 me-2 shrink-0'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                  clipRule='evenodd'
                ></path>
              </svg>{' '}
              What are the differences between Flowbite and Tailwind UI?
            </span>
            <svg
              data-accordion-icon
              className='w-3 h-3 rotate-180 shrink-0'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5 5 1 1 5'
              />
            </svg>
          </button>
        </h2>
        <div
          id='accordion-open-body-3'
          className='hidden'
          aria-labelledby='accordion-open-heading-3'
        >
          <div className='p-5 border border-t-0 border-gray-200 dark:border-gray-700'>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              The main difference is that the core components from Flowbite are open source under
              the MIT license, whereas Tailwind UI is a paid product. Another difference is that
              Flowbite relies on smaller and standalone components, whereas Tailwind UI offers
              sections of pages.
            </p>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI
              as there is no technical reason stopping you from using the best of two worlds.
            </p>
            <p className='mb-2 text-gray-500 dark:text-gray-400'>
              Learn more about these technologies:
            </p>
            <ul className='ps-5 text-gray-500 list-disc dark:text-gray-400'>
              <li>
                <a
                  href='https://flowbite.com/pro/'
                  className='text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href='https://tailwindui.com/'
                  rel='nofollow'
                  className='text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Docs />

      <Footer />
    </div>
  );
};

export default docs;

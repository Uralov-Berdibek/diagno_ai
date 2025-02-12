import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='text-sm leading-6 mt-16'>
      <div className='pt-10 pb-5 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5'>
        <div className='mb-6 sm:mb-0 sm:flex'>
          <p>Copyright © 2025 Diagno AI.</p>
          <p className='sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5'>
            <a className='hover:text-slate-900 dark:hover:text-slate-400' href='/brand'>
              Trademark Policy
            </a>
          </p>
        </div>
        <div className='flex space-x-10 text-slate-400 dark:text-slate-500'>
          <a
            href='https://github.com/tailwindlabs/tailwindcss'
            className='hover:text-slate-500 dark:hover:text-slate-400'
          >
            <span className='sr-only'>GitHub</span>
            <svg width='25' height='24' fill='currentColor'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.846 0c-6.63 0-12 5.506-12 12.303 0 5.445 3.435 10.043 8.205 11.674.6.107.825-.262.825-.585 0-.292-.015-1.261-.015-2.291-3.015.569-3.795-.754-4.035-1.446-.135-.354-.72-1.446-1.23-1.738-.42-.23-1.02-.8-.015-.815.945-.015 1.62.892 1.845 1.261 1.08 1.86 2.805 1.338 3.495 1.015.105-.8.42-1.338.765-1.645-2.67-.308-5.46-1.37-5.46-6.075 0-1.338.465-2.446 1.23-3.307-.12-.308-.54-1.569.12-3.26 0 0 1.005-.323 3.3 1.26.96-.276 1.98-.415 3-.415s2.04.139 3 .416c2.295-1.6 3.3-1.261 3.3-1.261.66 1.691.24 2.952.12 3.26.765.861 1.23 1.953 1.23 3.307 0 4.721-2.805 5.767-5.475 6.075.435.384.81 1.122.81 2.276 0 1.645-.015 2.968-.015 3.383 0 .323.225.707.825.585a12.047 12.047 0 0 0 5.919-4.489 12.537 12.537 0 0 0 2.256-7.184c0-6.798-5.37-12.304-12-12.304Z'
              ></path>
            </svg>
          </a>
          <a href='/discord' className='hover:text-slate-500 dark:hover:text-slate-400'>
            <span className='sr-only'>Discord</span>
            <svg width='23' height='24' viewBox='0 0 127.14 96.36' fill='currentColor'>
              <path d='M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z'></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

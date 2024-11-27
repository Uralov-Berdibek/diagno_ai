import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='flex h-14 items-center px-4'>
      <div className='mr-4 hidden md:flex'>
        <a className='mr-4 flex items-center gap-2 lg:mr-6' href='/'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' className='h-6 w-6'>
            <rect width='256' height='256' fill='none'></rect>
            <line
              x1='208'
              y1='128'
              x2='128'
              y2='208'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='32'
            ></line>
            <line
              x1='192'
              y1='40'
              x2='40'
              y2='192'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='32'
            ></line>
          </svg>
          <span className='hidden font-bold lg:inline-block'>shadcn/ui</span>
        </a>
        <nav className='flex items-center gap-4 text-sm xl:gap-6'>
          <a className='transition-colors hover:text-foreground/80 text-foreground/80' href='/docs'>
            Docs
          </a>
          <a
            className='transition-colors hover:text-foreground/80 text-foreground/80'
            href='/docs/components'
          >
            Components
          </a>
          <a
            className='transition-colors hover:text-foreground/80 text-foreground/80'
            href='/blocks'
          >
            Blocks
          </a>
          <a
            className='transition-colors hover:text-foreground/80 text-foreground/80'
            href='/charts'
          >
            Charts
          </a>
          <a
            className='transition-colors hover:text-foreground/80 text-foreground/80'
            href='/themes'
          >
            Themes
          </a>
          <a
            className='transition-colors hover:text-foreground/80 text-foreground/80'
            href='/colors'
          >
            Colors
          </a>
        </nav>
      </div>
      <button
        className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground py-2 -ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        type='button'
        aria-haspopup='dialog'
        aria-expanded='false'
        aria-controls='radix-:R15u6ja:'
        data-state='closed'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='!size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 9h16.5m-16.5 6.75h16.5'
          ></path>
        </svg>
        <span className='sr-only'>Toggle Menu</span>
      </button>
      <div className='flex flex-1 items-center justify-between gap-2 md:justify-end'>
        <nav className='flex items-center gap-0.5'>
          <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground py-2 group/toggle h-8 w-8 px-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-sun hidden [html.dark_&amp;]:block'
            >
              <circle cx='12' cy='12' r='4'></circle>
              <path d='M12 2v2'></path>
              <path d='M12 20v2'></path>
              <path d='m4.93 4.93 1.41 1.41'></path>
              <path d='m17.66 17.66 1.41 1.41'></path>
              <path d='M2 12h2'></path>
              <path d='M20 12h2'></path>
              <path d='m6.34 17.66-1.41 1.41'></path>
              <path d='m19.07 4.93-1.41 1.41'></path>
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-moon hidden [html.light_&amp;]:block'
            >
              <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'></path>
            </svg>
            <span className='sr-only'>Toggle theme</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;

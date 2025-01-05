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

export const CubeIcon: React.FC<IconProps> = (props) => (
  <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
    <path
      d='m6 9 6-3 6 3v6l-6 3-6-3V9Z'
      className='fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400'
    ></path>
    <path
      d='m6 9 6 3v7l-6-3V9Z'
      className='fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500'
    ></path>
    <path
      d='m18 9-6 3v7l6-3V9Z'
      className='fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600'
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

export const LogoIcon: React.FC<IconProps> = (props) => (
  <svg
    id='Layer_1'
    data-name='Layer 1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1080 1080'
    {...props}
  >
    <path
      fill='#2b6a73'
      d='M931.19942,449.4722V630.9604a21.64672,21.64672,0,0,1-21.653,21.653H795.03834a10.113,10.113,0,0,0-7.14541,17.25031l80.94581,80.91056a21.69246,21.69246,0,0,1,0,30.638L740.47241,909.7425a21.64987,21.64987,0,0,1-30.6028,0l-81.16255-81.12642a10.08021,10.08021,0,0,0-17.21419,7.14541V950.48633a21.64672,21.64672,0,0,1-21.653,21.653H408.31558a21.653,21.653,0,0,1-21.653-21.653l0-230.82875a88.75143,88.75143,0,0,1,11.08535-43.59A202.48477,202.48477,0,0,1,514.59632,581.917a43.85988,43.85988,0,0,0,0-83.7978,202.4348,202.4348,0,0,1-116.72976-93.963,89.55084,89.55084,0,0,1-11.204-44.06244l0-230.58a21.653,21.653,0,0,1,21.653-21.653H589.83989a21.653,21.653,0,0,1,21.653,21.653V244.23851a10.088,10.088,0,0,0,17.21419,7.14541l81.16255-81.12642a21.5847,21.5847,0,0,1,30.6028,0L868.83874,298.58682a21.69459,21.69459,0,0,1,0,30.63981L787.42332,410.605a10.08794,10.08794,0,0,0,7.1463,17.21419H909.54644A21.653,21.653,0,0,1,931.19942,449.4722Z'
    />
    <path
      fill='#66b49e'
      d='M469.59566,550.18925A239.44242,239.44242,0,0,0,323.00978,696.77513a10.78759,10.78759,0,0,1-20.3785,0A239.4424,239.4424,0,0,0,156.0454,550.18925a10.78759,10.78759,0,0,1,0-20.3785A239.4424,239.4424,0,0,0,302.63128,383.22487a10.78759,10.78759,0,0,1,20.3785,0A239.44242,239.44242,0,0,0,469.59566,529.81075,10.78758,10.78758,0,0,1,469.59566,550.18925Z'
    />
    <rect fill='none' width='1080' height='1080' />
  </svg>
);

export const DiagnoAIIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 997.69135 207.6922'
    width={80}
    height={20}
    {...props}
  >
    <defs>
      <style>
        {`.cls-1,.cls-2{fill:#2b6a73;}
        .cls-2{font-size:173.44542px;font-family:Aeonik-Bold, Aeonik;font-weight:700;letter-spacing:0.01em;}
        .cls-3{fill:#66b49e;}`}
      </style>
    </defs>
    <path
      className='cls-1'
      d='M229.17027,518.24554v43.61288a5.20186,5.20186,0,0,1-5.20336,5.20336h-27.5171a2.43021,2.43021,0,0,0-1.71709,4.14537l19.45184,19.44338a5.21285,5.21285,0,0,1,0,7.36254l-30.84733,30.83864a5.20261,5.20261,0,0,1-7.35407,0l-19.50392-19.49525a2.42235,2.42235,0,0,0-4.13669,1.7171v27.56918a5.20186,5.20186,0,0,1-5.20337,5.20336H103.51762a5.20336,5.20336,0,0,1-5.20336-5.20336V583.173a21.32758,21.32758,0,0,1,2.66388-10.475,48.65853,48.65853,0,0,1,28.07949-22.62506,10.53984,10.53984,0,0,0,0-20.1372,48.64649,48.64649,0,0,1-28.051-22.58,21.5197,21.5197,0,0,1-2.69239-10.58852v-55.41a5.20336,5.20336,0,0,1,5.20336-5.20336h43.62156a5.20336,5.20336,0,0,1,5.20337,5.20336v27.56918a2.42421,2.42421,0,0,0,4.13669,1.7171l19.50392-19.49525a5.187,5.187,0,0,1,7.35407,0l30.84733,30.83843a5.21336,5.21336,0,0,1,0,7.363l-19.56469,19.5558a2.4242,2.4242,0,0,0,1.7173,4.13669h27.62974A5.20337,5.20337,0,0,1,229.17027,518.24554Z'
      transform='translate(-41.15435 -436.1539)'
    />
    <text className='cls-2' transform='translate(245.46582 159.69473)'>
      DiagnoAI
    </text>
    <path
      className='cls-3'
      d='M118.24365,542.44855A57.53968,57.53968,0,0,0,83.018,577.67416a2.59233,2.59233,0,0,1-4.8971,0,57.53963,57.53963,0,0,0-35.22561-35.22561,2.59233,2.59233,0,0,1,0-4.8971,57.53963,57.53963,0,0,0,35.22561-35.22561,2.59233,2.59233,0,0,1,4.8971,0,57.53968,57.53968,0,0,0,35.22561,35.22561A2.59233,2.59233,0,0,1,118.24365,542.44855Z'
      transform='translate(-41.15435 -436.1539)'
    />
  </svg>
);

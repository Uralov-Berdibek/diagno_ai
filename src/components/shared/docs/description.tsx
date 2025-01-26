import React from 'react';

type DescriptionProps = {
  fristDesc: string;
  secondDesc: string;
};

const Description = ({ fristDesc, secondDesc }: DescriptionProps) => {
  return (
    <div className='mt-10'>
      <p className='text-slate-500 dark:text-slate-400 text-justify'>{fristDesc}</p>
      <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />
      <p className='text-gray-500 dark:text-gray-400 text-justify'>{secondDesc}</p>
    </div>
  );
};

export default Description;

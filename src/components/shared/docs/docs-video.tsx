import React from 'react';

type DocsVideoProps = {
  title: string;
  videoUrl: string;
};

const DocsVideo = ({ title, videoUrl }: DocsVideoProps) => {
  return (
    <div className='mt-10'>
      <h2 className='relative group text-2xl'>
        {title}
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
        <source src={videoUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DocsVideo;

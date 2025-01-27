import React from 'react';
import DocsItem from './docs-item';

const docsItems = [
  {
    title: 'Diagno AI-dan qanday foydalanish kerak.',
    description: 'Analiz natijalarini yuklab, AI yordamida chuqur tahlil va izohlarni oling.',
    link: '/docs/how-do-we-use',
    icon: {
      svgPath:
        'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      color: 'bg-indigo-500',
      iconColor: 'text-white',
    },
  },
  {
    title: 'Diagno AI qanday ishlayi.',
    description: "O'zingizning sog'lig'ingiz haqida yozing va AI tahlilidan foydalaning.",
    link: '/docs/how-does-it-work',
    icon: {
      svgPath:
        'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      color: 'bg-indigo-500',
      iconColor: 'text-white',
    },
  },
];

const Docs = () => {
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
        {docsItems.map((item, index) => (
          <DocsItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Docs;

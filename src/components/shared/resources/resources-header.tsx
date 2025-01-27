import React from 'react';

const ResourcesHeader = () => {
  return (
    <header className='mb-20 max-w-xl'>
      <p className='mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400'>
        Manbalar
      </p>
      <h1 className='mb-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200'>
        Tahlil va qarorlar asosida foydalanilgan manbalarning to&#39;liq ro'yxati.
      </h1>
      <p className='text-lg text-slate-700 dark:text-slate-400 text-justify'>
        Ushbu sahifada AI tomonidan tahlil va diagnostika jarayonlarida ishlatilgan ma&#39;lumotlar
        manbalari keltirilgan. Bu yerda siz foydalanilgan ilmiy maqolalar, ma&#39;lumotlar
        to&#39;plamlari va boshqa ishonchli axborot resurslari haqida batafsil ma&#39;lumot topasiz.
      </p>
    </header>
  );
};

export default ResourcesHeader;

import React from 'react';

const Comunity = () => {
  return (
    <div className='lg:pl-[21rem] pr-5'>
      <main className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none pl-5 md:px-0'>
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-gray-100 dark:bg-slate-900/50 rounded-md'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 dark:text-white'>
            Biz bilan bog&#39;lanish!
          </h2>
          <p className='mb-8 lg:mb-16 font-light text-center text-slate-500 dark:text-slate-400 sm:text-xl'>
            Texnik muammo bormi? Beta funksiyasi haqida fikr-mulohaza yubormoqchimisiz? Bizga xabar
            bering.
          </p>
          <form action='#' className='space-y-8'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-300'
              >
                Sizning elektron pochtangiz.
              </label>
              <input
                type='email'
                id='email'
                className='shadow-sm bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder='name@diagno.ai'
                required
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-300'
              >
                Ism Familiyangiz
              </label>
              <input
                type='text'
                id='subject'
                className='block p-3 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                placeholder="Kimligingiz haqida to'liq malumot bering"
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-slate-900 dark:text-slate-400'
              >
                Xabaringiz
              </label>
              <textarea
                id='message'
                rows={6}
                className='block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-lg shadow-sm border border-slate-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Sizga qanday yordam berishimiz mumkinligini bizga xabar bering...'
              ></textarea>
            </div>
            <button
              type='submit'
              className='py-3 px-5 text-sm font-medium text-center text-slate-800 dark:text-white rounded-lg dark:bg-slate-800 bg-slate-50 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              Xabar yuborish
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Comunity;

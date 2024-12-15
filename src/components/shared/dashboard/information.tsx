'use client';
import Image from 'next/image';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Information = () => {
  // Function to generate a new UUID
  const generateNewChatId = () => {
    return uuidv4(); // Generates a unique UUID
  };

  const handleNewChat = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents default link behavior
    const newChatId = generateNewChatId();
    window.location.href = `/dashboard/new-chat/${newChatId}`;
  };

  return (
    <div className='mt-8 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-900/25'>
      <div className='flex-auto'>
        <h3 className='mb-4 text-sm leading-6 font-semibold text-blue-500'>Diagno AI</h3>
        <p className='mb-2 text-xl font-semibold tracking-wider text-slate-900 dark:text-slate-200'>
          Tizimdan foydalanish
        </p>
        <div className='mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400'>
          <p>
            Diagno AI foydalanuvchilarga oddiy va qulay interfeys orqali kasallik belgilarini
            kiritish imkonini beradi. AI ushbu ma&#39;lumotlarni tahlil qilib, ehtimoliy tashxis va
            davolash bo&#39;yicha tavsiyalarni taklif etadi. Barcha jarayon tezkor va aniq
            natijalarga asoslanadi.
          </p>
          <p>
            Diagno AI tomonidan taqdim etilgan tashxis va tavsiyalar sog&#39;liqni saqlash
            bo&#39;yicha dastlabki qadamlar uchun mo&#39;ljallangan.
          </p>
        </div>
        <a
          onClick={handleNewChat}
          className='group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 cursor-pointer'
          href='#'
        >
          Yangi Chat<span className='sr-only'>, Diagno AI</span>
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
    </div>
  );
};

export default Information;

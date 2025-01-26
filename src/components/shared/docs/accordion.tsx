'use client';
import React, { useState } from 'react';

type AccordionItem = {
  id: number;
  heading: string;
  body: string;
  link?: {
    text: string;
    url: string;
  };
  links?: { text: string; url: string }[];
};

type AccordionProps = {
  accordionData: AccordionItem[];
};

const Accordion = ({ accordionData }: AccordionProps) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const openAccordion = (id: number) => {
    setOpenItemId(id);
  };

  return (
    <div className='my-10' id='accordion-open' data-accordion='open'>
      {accordionData.map((item) => (
        <div key={item.id} className='border border-gray-200 dark:border-gray-700 rounded-lg mb-4'>
          <h2 id={`accordion-open-heading-${item.id}`}>
            <button
              type='button'
              className='flex items-center justify-between w-full p-5 font-medium text-gray-500 border-b dark:text-gray-400 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={openItemId === item.id}
              aria-controls={`accordion-open-body-${item.id}`}
            >
              <span className='flex items-center'>
                <svg
                  className='w-5 h-5 mr-2 shrink-0'
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
                {item.heading}
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 transform ${
                  openItemId === item.id ? 'rotate-180' : ''
                }`}
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
            id={`accordion-open-body-${item.id}`}
            className={`${openItemId === item.id ? 'block' : 'hidden'}`}
            aria-labelledby={`accordion-open-heading-${item.id}`}
          >
            <div className='p-5 bg-gray-50 dark:bg-gray-900'>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>{item.body}</p>
              {item.link ? (
                <a
                  href={item.link.url}
                  className='text-blue-600 dark:text-blue-500 hover:underline'
                >
                  {item.link.text}
                </a>
              ) : item.links ? (
                <ul className='pl-5 list-disc text-gray-500 dark:text-gray-400'>
                  {item.links.map((link, index) => (
                    <li key={index} className='list-none'>
                      <a
                        href={link.url}
                        className='text-blue-600 dark:text-blue-500 hover:underline'
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

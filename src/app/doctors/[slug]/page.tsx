export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  return (
    <div className='lg:pl-[19rem]'>
      <div className=''>
        <section className='w-full overflow-hidden bg-transparent'>
          <div className='w-full mx-auto'>
            <img
              src='https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080'
              alt='User Cover'
              className='w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]'
            />

            <div className='w-full mx-auto flex justify-center'>
              <img
                src='https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTA0ODExOTN8MA&ixlib=rb-4.0.3&q=80&w=1080'
                alt='User Profile'
                className='rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]'
              />
            </div>

            <div className='xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]'>
              <h1 className='text-center text-gray-800 dark:text-white text-4xl font-serif'>
                Samuel Abera
              </h1>
              <p className='w-full text-gray-700 dark:text-gray-400 text-md text-pretty sm:text-center xs:text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis labore
                consectetur voluptatibus mollitia dolorem veniam omnis ut quibusdam minima sapiente
                repellendus asperiores explicabo, eligendi odit, dolore similique fugiat dolor,
                doloremque eveniet. Odit, consequatur. Ratione voluptate exercitationem hic eligendi
                vitae animi nam in, est earum culpa illum aliquam. Atque aperiam et voluptatum
                voluptate distinctio, nostrum hic voluptatibus nisi. Eligendi voluptatibus numquam
                maxime voluptatem labore similique qui illo est magnam adipisci autem quisquam, quia
                incidunt excepturi, possimus odit praesentium?
              </p>

              <div className='mt-10'>
                <h1 className='flex items-center text-xl font-extrabold dark:text-white'>
                  Tajriba va
                  <span className='bg-blue-100 text-blue-800 text-lg font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2'>
                    Talim olgan joylari
                  </span>
                </h1>

                <ol className='relative border-s border-gray-200 dark:border-gray-700 mt-4'>
                  <li className='mb-10 ms-6'>
                    <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                      <svg
                        className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                      </svg>
                    </span>
                    <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                      Flowbite Application UI v2.0.0{' '}
                      <span className='bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3'>
                        Latest
                      </span>
                    </h3>
                    <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                      Released on January 13th, 2022
                    </time>
                    <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                      Get access to over 20+ pages including a dashboard layout, charts, kanban
                      board, calendar, and pre-order E-commerce & Marketing pages.
                    </p>
                    <a
                      href='#'
                      className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                    >
                      <svg
                        className='w-3.5 h-3.5 me-2.5'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z' />
                        <path d='M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z' />
                      </svg>{' '}
                      Download ZIP
                    </a>
                  </li>
                  <li className='mb-10 ms-6'>
                    <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                      <svg
                        className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                      </svg>
                    </span>
                    <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                      Flowbite Figma v1.3.0
                    </h3>
                    <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                      Released on December 7th, 2021
                    </time>
                    <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                      All of the pages and components are first designed in Figma and we keep a
                      parity between the two versions even as we update the project.
                    </p>
                  </li>
                  <li className='ms-6'>
                    <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                      <svg
                        className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                      </svg>
                    </span>
                    <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                      Flowbite Library v1.2.2
                    </h3>
                    <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                      Released on December 2nd, 2021
                    </time>
                    <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                      Get started with dozens of web components and interactive elements built on
                      top of Tailwind CSS.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

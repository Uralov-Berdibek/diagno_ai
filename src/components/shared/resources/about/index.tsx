import React from 'react';
import AboutItem from './about-item';

const aboutItems = [
  {
    title: 'Refactoring UI',
    subtitle: 'Learn UI Design',
    description: [
      'Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.',
      'Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.',
    ],
    link: '#',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    imageAlt: 'Image',
  },
  {
    title: 'Refactoring UI',
    subtitle: 'Learn UI Design',
    description: [
      'Refactoring UI is a design-for-developers book + video series put together by Adam Wathan and Steve Schoger. It covers literally everything we know about making things look awesome.',
      'Almost 10,000 people have picked it up so far and have all sorts of awesome things to say about how it helped them improve their work.',
    ],
    link: '#',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    imageAlt: 'Image',
  },
];

const About = () => {
  return (
    <section>
      <h2 className='mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200'>
        Design resources
      </h2>
      <div className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark'>
        <p>
          Design is hard so we made a few resources to help you with it. These resources are a great
          way to help you with your designs and a great way to support the development of the
          framework.
        </p>
      </div>
      <ul className='sm:space-y-6'>
        {aboutItems.map((item, index) => (
          <AboutItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default About;

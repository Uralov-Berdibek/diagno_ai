import React from 'react';
import ContentItem from './content-item';
const contentItems = [
  {
    title: 'Headless UI',
    subtitle: 'Completely unstyled, fully accessible UI components',
    description:
      'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
    link: 'https://headlessui.dev',
    image: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    tag: 'Headless UI',
    tagColor: 'text-indigo-500',
  },
  {
    title: 'Heroicons',
    subtitle: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
    description:
      'A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries.',
    link: 'https://heroicons.com',
    image: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    tag: 'Heroicons',
    tagColor: 'text-purple-500',
  },
  {
    title: 'Hero Patterns',
    subtitle: 'Seamless SVG background patterns by the makers of Tailwind CSS.',
    description:
      'A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web projects.',
    link: 'https://heropatterns.com',
    image: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    tag: 'Hero Patterns',
    tagColor: 'text-cyan-500',
  },
];
const Content = () => {
  return (
    <section>
      <h2 className='mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200'>
        Additional resources
      </h2>
      <div className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark'>
        <p>
          Tailwind is not the only open-source project we maintain. We have made a few other
          resources to help you with your design and development workflow.
        </p>
      </div>
      <ul className='grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start'>
        {contentItems.map((item, index) => (
          <ContentItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Content;

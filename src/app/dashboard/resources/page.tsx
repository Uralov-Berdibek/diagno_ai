import React from 'react';
import Footer from '../../../components/shared/footer';
import ResourcesHeader from '../../../components/shared/resources/resources-header';
import About from '../../../components/shared/resources/about';
import Content from '../../../components/shared/resources/content';
import Docs from '../../../components/shared/resources/docs';

type Props = {};

const ResourcesPage = (props: Props) => {
  return (
    <div className='lg:pl-[21rem] pr-5 mt-24'>
      <main className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none pl-5 md:px-0'>
        <ResourcesHeader />
        <div className='space-y-16'>
          <About />
          <Content />
          <Docs />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ResourcesPage;

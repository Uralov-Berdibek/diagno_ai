import React from 'react';
import Footer from '../../../components/shared/footer';
import ResourcesHeader from '../../../components/shared/resources/resources-header';
import About from '../../../components/shared/resources/about';
import Content from '../../../components/shared/resources/content';
import Docs from '../../../components/shared/resources/docs';

type Props = {};

const ResourcesPage = (props: Props) => {
  return (
    <div className='lg:pl-[21rem] pr-6 py-4'>
      <main className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <ResourcesHeader />
        <div className='space-y-16'>
          <About />
          <Content />
          <Docs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;

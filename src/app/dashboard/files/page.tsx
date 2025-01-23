import React from 'react';
import Lists from '../../../components/shared/dashboard/files';
import FilesHeader from '../../../components/shared/dashboard/files/files-header';

const FilesPage = () => {
  return (
    <div className='lg:pl-[21rem] pr-6 mt-24'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none ml-[14px]'>
        <FilesHeader />
        <Lists />
      </div>
    </div>
  );
};

export default FilesPage;

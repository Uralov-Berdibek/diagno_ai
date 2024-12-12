import React from 'react';
import Lists from '../../../components/shared/dashboard/files';
import { IFolderAndFile } from '../../../types';
import FilesHeader from '../../../components/shared/dashboard/files/files-header';

const folderAndFileList: IFolderAndFile[] = [
  {
    id: '1',
    name: 'Documents',
    uid: 'user123',
    timestamp: '2024-12-09T08:00:00Z',
    image: '/images/folder.png',
    type: 'folder',
    size: 0,
    isStar: false,
    archivedTime: '',
  },
  {
    id: '2',
    name: 'ProjectPlan.pdf',
    uid: 'user123',
    timestamp: '2024-12-08T14:30:00Z',
    image: '/images/pdf-icon.png',
    type: 'file',
    size: 1024, // Size in KB
    isStar: true,
    archivedTime: '',
  },
  {
    id: '3',
    name: 'HolidayPhotos.zip',
    uid: 'user456',
    timestamp: '2024-12-07T10:15:00Z',
    image: '/images/zip-icon.png',
    type: 'file',
    size: 51200, // Size in KB
    isStar: false,
    archivedTime: '2024-12-09T07:45:00Z',
  },
  {
    id: '4',
    name: 'Presentation.pptx',
    uid: 'user789',
    timestamp: '2024-12-06T09:00:00Z',
    image: '/images/ppt-icon.png',
    type: 'file',
    size: 2048, // Size in KB
    isStar: true,
    archivedTime: '',
  },
  {
    id: '5',
    name: 'Music',
    uid: 'user123',
    timestamp: '2024-12-05T12:00:00Z',
    image: '/images/folder.png',
    type: 'folder',
    size: 0,
    isStar: false,
    archivedTime: '',
  },
];

const FilesPage = () => {
  return (
    <div className='lg:pl-[21rem] pr-6'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none ml-[14px]'>
        <FilesHeader />
        <Lists files={folderAndFileList} />
      </div>
    </div>
  );
};

export default FilesPage;

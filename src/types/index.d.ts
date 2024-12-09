import { ReactNode } from 'react';

export interface ChildProps {
  children: ReactNode;
}

export interface DocIdProps {
  params: {
    documentId: string;
  };
}

export interface IFolderAndFile {
  id: string;
  name: string;
  uid: string;
  timestamp: string;
  image: string;
  type: string;
  size: number;
  isStar: boolean;
  archivedTime: string;
}

import { Prisma } from '@prisma/client';
import { ReactNode } from 'react';

export interface ChildProps {
  children: ReactNode;
}

export interface DocIdProps {
  params: {
    documentId: string;
  };
}

export type PageResponse = {
  id: number;
  name: string;
  path: string;
  isFavorite: boolean;
  content: Prisma.JsonValue | null;
  createdAt: Date;
  updatedAt: Date;
};

import { CreatePageInterface } from '@/types';
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

// Define the base Page type
export interface Page {
  id: number;
  name: string;
  path: string;
  isFavorite: boolean;
  content: Record<string, any> | null;
  createdAt: Date;
  updatedAt: Date;
}

// Define the create page request type
export interface CreatePageRequest {
  slug: string;
}

// Define the create page response type
export interface CreatePageResponse {
  status: string;
  message: string;
  data: Page;
}

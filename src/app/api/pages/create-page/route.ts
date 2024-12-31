import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import type { CreatePageRequest, Page } from '@/types';

export async function POST(request: Request) {
  try {
    const { slug } = await request.json() as CreatePageRequest;

    if (!slug) {
      return NextResponse.json(
        { status: 'error', message: 'Slug is required' },
        { status: 400 }
      );
    }

    const newPage = await prisma.page.create({
      data: {
        name: `untitled ${slug}`,
        path: `new-chat/${slug}`,
      },
      select: {
        id: true,
        name: true,
        path: true,
        isFavorite: true,
        content: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const safePage: Page = {
      ...newPage,
      content: typeof newPage.content === 'object' ? newPage.content : null,
      createdAt: new Date(newPage.createdAt),
      updatedAt: new Date(newPage.updatedAt),
    };

    return NextResponse.json({
      status: 'success',
      message: 'Page created successfully',
      data: safePage,
    });
  } catch (error) {
    console.error('Create page error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to create page' },
      { status: 500 }
    );
  }
}

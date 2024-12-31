import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import type { CreatePageRequest, Page } from '@/types';

export async function POST(request: Request) {
  try {
    const { slug } = (await request.json()) as CreatePageRequest;

    if (!slug) {
      return NextResponse.json({ status: 'error', message: 'Slug is required' }, { status: 400 });
    }

    const newPage = await prisma.page.create({
      data: {
        name: `untitled ${slug}`,
        path: `new-chat/${slug}`,
      },
    });

    const safePage: Page = {
      id: newPage.id,
      name: newPage.name,
      path: newPage.path,
      isFavorite: Boolean(newPage.isFavorite),
      content: null,
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
      { status: 500 },
    );
  }
}

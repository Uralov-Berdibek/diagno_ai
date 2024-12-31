import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { PageResponse } from '@/types';

export async function POST(request: Request) {
  try {
    const { slug } = (await request.json()) as { slug: string };

    if (!slug) {
      return NextResponse.json({ status: 'error', message: 'Slug is required' }, { status: 400 });
    }

    const newPage = await prisma.page.create({
      data: {
        name: `untitled ${slug}`,
        path: `new-chat/${slug}`,
        // Let Prisma handle defaults for isFavorite and content
      },
    });

    // Transform dates to ensure consistency
    const safePage: PageResponse = {
      ...newPage,
      content: newPage.content || {},
      isFavorite: !!newPage.isFavorite,
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

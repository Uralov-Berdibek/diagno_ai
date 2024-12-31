import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { PageResponse } from '../../../../types';

// Define request type
type CreatePageRequest = {
  slug: string;
};

export async function POST(request: Request) {
  try {
    const { slug } = (await request.json()) as CreatePageRequest;

    if (!slug) {
      return NextResponse.json({ status: 'error', message: 'Slug is required' }, { status: 400 });
    }

    // Create new page with explicit typing
    const newPage = await prisma.page.create({
      data: {
        name: `untitled ${slug}`,
        path: `new-chat/${slug}`,
        isFavorite: false,
        content: {},
      },
    });

    // Transform the response to match PageResponse type
    const safePage: PageResponse = {
      ...newPage,
      content: newPage.content ?? null,
      isFavorite: Boolean(newPage.isFavorite),
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

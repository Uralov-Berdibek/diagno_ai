import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import type { CreatePageRequest, Page } from '@/types';

export async function POST(request: Request) {
  try {
    const { slug } = (await request.json()) as CreatePageRequest;

    if (!slug) {
      return NextResponse.json({ status: 'error', message: 'Slug is required' }, { status: 400 });
    }

    // Create the page with minimal required fields
    const page = await prisma.page.create({
      data: {
        name: `untitled ${slug}`,
        path: `new-chat/${slug}`,
      },
    });

    // Transform to safe page object
    const safePage: Page = {
      id: page.id,
      name: page.name,
      path: page.path,
      isFavorite: false,
      content: null,
      createdAt: new Date(page.createdAt),
      updatedAt: new Date(page.updatedAt),
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

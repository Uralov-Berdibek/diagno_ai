import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { PageResponse } from '@/types';

export async function GET() {
  try {
    const pages = await prisma.page.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Transform the data to ensure consistent types
    const safePages: PageResponse[] = pages.map(page => ({
      ...page,
      content: page.content || {},
      isFavorite: !!page.isFavorite,
      createdAt: new Date(page.createdAt),
      updatedAt: new Date(page.updatedAt),
    }));

    return NextResponse.json({
      status: 'success',
      data: safePages,
    });
  } catch (error) {
    console.error('Get pages error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to fetch pages',
        data: [],
      },
      { status: 500 }
    );
  }
}

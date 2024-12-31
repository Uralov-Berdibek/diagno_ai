import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const pages = await prisma.page.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        path: true,
        content: true,
        isFavorite: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      status: 'success',
      data: pages,
    });
  } catch (error) {
    console.error('Get pages error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to fetch pages',
        data: [],
      },
      { status: 500 },
    );
  }
}

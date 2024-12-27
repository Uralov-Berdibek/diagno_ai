import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch all pages
    const pages = await prisma.page.findMany({
      orderBy: {
        createdAt: 'desc', // Most recent first
      },
    });

    return NextResponse.json({
      status: 'success',
      data: pages,
    });
  } catch (error) {
    console.error('Get pages error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch pages' },
      { status: 500 },
    );
  }
}

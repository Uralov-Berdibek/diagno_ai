import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { slug } = body;

    // Validate slug
    if (!slug) {
      return NextResponse.json({ status: 'error', message: 'Slug is required' }, { status: 400 });
    }

    // Create new page with default values
    const newPage = await prisma.page.create({
      data: {
        name: `untitled ${slug}`,
        path: `new-chat/${slug}`,
        isFavorite: false,
        content: {}, // Empty JSON object as default
      },
    });

    return NextResponse.json({
      status: 'success',
      message: 'Page created successfully',
      data: newPage,
    });
  } catch (error) {
    console.error('Create page error:', error);

    // Check for Prisma validation errors
    if (error instanceof Error && error.message.includes('Prisma')) {
      return NextResponse.json(
        { status: 'error', message: 'Database error occurred' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { status: 'error', message: 'Failed to create page' },
      { status: 500 }
    );
  }
}

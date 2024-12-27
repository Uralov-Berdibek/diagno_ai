import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Get slug from request body
    const { slug } = await request.json();

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
    return NextResponse.json(
      { status: 'error', message: 'Failed to create page' },
      { status: 500 },
    );
  }
}

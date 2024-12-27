import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

// Define the expected request body type
type CreatePageRequest = {
  slug: string;
};

export async function POST(request: Request) {
  try {
    const { slug } = (await request.json()) as CreatePageRequest;

    if (!slug) {
      return NextResponse.json({ status: 'error', message: 'Slug is required' }, { status: 400 });
    }

    // Use Prisma's type for page creation
    const pageData: Prisma.PageCreateInput = {
      name: `untitled ${slug}`,
      path: `new-chat/${slug}`,
      isFavorite: false,
      content: Prisma.JsonNull, // or {} if you want an empty object
    };

    const newPage = await prisma.page.create({
      data: pageData,
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

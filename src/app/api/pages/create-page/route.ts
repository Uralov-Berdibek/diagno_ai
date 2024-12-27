import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { Page } from '@prisma/client';

type CreatePageRequest = {
  slug: string;
};

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
        content: {},
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

import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { Prisma, Page as PrismaPage } from '@prisma/client';

type CreatePageRequest = {
  slug: string;
};

export async function POST(request: Request) {
  try {
    const { slug } = await request.json() as CreatePageRequest;

    if (!slug) {
      return NextResponse.json(
        { status: 'error', message: 'Slug is required' },
        { status: 400 }
      );
    }

    const pageData: Prisma.PageCreateInput = {
      name: `untitled ${slug}`,
      path: `new-chat/${slug}`,
    };

    const newPage = await prisma.page.create({
      data: pageData,
    });

    return NextResponse.json({
      status: 'success',
      message: 'Page created successfully',
      data: {
        id: newPage.id,
        name: newPage.name,
        path: newPage.path,
        isFavorite: false,
        content: null,
        createdAt: newPage.createdAt,
        updatedAt: newPage.updatedAt,
      },
    });
  } catch (error) {
    console.error('Create page error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to create page' },
      { status: 500 }
    );
  }
}

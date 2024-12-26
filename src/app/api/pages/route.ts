import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { Page, Prisma } from '@prisma/client';

interface CreatePageRequest {
  name: string;
  path: string;
  content: string;
}

// Get all pages
export async function GET() {
  try {
    const pages = await prisma.page.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    return NextResponse.json(pages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 });
  }
}

// Create new page
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreatePageRequest;

    const page = await prisma.page.create({
      data: {
        name: body.name,
        path: body.path,
        content: body.content,
        isFavorite: false, // Add default value
      },
    });

    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create page' }, { status: 500 });
  }
}

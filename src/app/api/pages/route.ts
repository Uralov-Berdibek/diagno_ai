import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { Prisma } from '@prisma/client';

// Define the shape of our request data
type CreatePageInput = Pick<Prisma.PageCreateInput, 'name' | 'path' >;

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
    const body = await request.json() as CreatePageInput;

    const page = await prisma.page.create({
      data: {
        name: body.name,
        path: body.path,
        isFavorite: false
      }
    });

    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create page' }, { status: 500 });
  }
}

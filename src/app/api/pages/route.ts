import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

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
    const { name, path, content } = await request.json();
    const page = await prisma.page.create({
      data: { name, path, content },
    });
    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create page' }, { status: 500 });
  }
}

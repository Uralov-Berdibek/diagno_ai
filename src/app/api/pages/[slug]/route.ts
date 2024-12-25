import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const page = await prisma.page.findUnique({
      where: { slug: params.slug },
      include: {
        messages: {
          include: {
            response: true,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }

    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching page' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  try {
    await prisma.page.delete({
      where: { slug: params.slug },
    });

    return NextResponse.json({ message: 'Page deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting page' }, { status: 500 });
  }
}

import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { slug: string } }) {
  try {
    const page = await prisma.page.findUnique({
      where: { slug: params.slug },
    });

    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }

    const updatedPage = await prisma.page.update({
      where: { slug: params.slug },
      data: {
        isFavorite: !page.isFavorite,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedPage);
  } catch (error) {
    return NextResponse.json({ error: 'Error toggling favorite status' }, { status: 500 });
  }
}

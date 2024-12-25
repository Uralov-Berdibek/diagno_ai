import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const page = await prisma.page.findUnique({
      where: { id: params.id },
    });

    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }

    const updatedPage = await prisma.page.update({
      where: { id: params.id },
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

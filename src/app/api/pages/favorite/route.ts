import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { isFavorite } = await request.json();
    const page = await prisma.page.update({
      where: { id: parseInt(params.id) },
      data: { isFavorite },
    });
    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update favorite status' }, { status: 500 });
  }
}

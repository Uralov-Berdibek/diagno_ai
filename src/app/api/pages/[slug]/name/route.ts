import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { slug: string } }) {
  try {
    const body = await request.json();

    if (!body.name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const page = await prisma.page.update({
      where: { slug: params.slug },
      data: {
        name: body.name,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating page name' }, { status: 500 });
  }
}

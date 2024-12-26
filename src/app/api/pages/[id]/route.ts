import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Get single page
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const page = await prisma.page.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }
    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch page' }, { status: 500 });
  }
}

// Update page
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const page = await prisma.page.update({
      where: { id: parseInt(params.id) },
      data: {
        name: body.name,
        content: body.content,
      },
    });
    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update page' }, { status: 500 });
  }
}
// Delete page
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.page.delete({
      where: { id: parseInt(params.id) },
    });
    return NextResponse.json({ message: 'Page deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete page' }, { status: 500 });
  }
}

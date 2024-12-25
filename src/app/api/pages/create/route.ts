import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    // Create the chat page in the database
    const page = await prisma.page.create({
      data: {
        id,
        name: 'New Chat',
        path: `/dashboard/new-chat/${id}`,
      },
    });

    return NextResponse.json({ success: true, page });
  } catch (error) {
    console.error('Error creating page:', error);
    return NextResponse.json({ success: false, error: 'Failed to create page' }, { status: 500 });
  }
}

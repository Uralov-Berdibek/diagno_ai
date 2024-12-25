import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();

    const message = await prisma.message.create({
      data: {
        pageId: params.id,
        content: body.content,
        fileUrl: body.fileUrl,
        fileType: body.fileType,
      },
    });

    // Here you would integrate with your AI service
    const aiResponse = 'AI response placeholder';

    const response = await prisma.response.create({
      data: {
        messageId: message.id,
        content: aiResponse,
      },
    });

    return NextResponse.json({
      message,
      response,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating message' }, { status: 500 });
  }
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const messages = await prisma.message.findMany({
      where: { pageId: params.id },
      include: { response: true },
      orderBy: { createdAt: 'asc' },
    });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching messages' }, { status: 500 });
  }
}

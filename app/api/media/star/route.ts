import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { slug, starred } = await req.json();

    const media = await db.media.update({
      where: { slug },
      data: { isStar: starred },
    });

    return NextResponse.json(media);
  } catch (error) {
    console.error('Error updating star status:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

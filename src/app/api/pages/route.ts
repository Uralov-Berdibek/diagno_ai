import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const page = await prisma.page.create({
      data: {
        name: body.name,
        path: body.path,
        messages: {
          create: {
            content: body.initialMessage.content,
            fileUrl: body.initialMessage.fileUrl,
            fileType: body.initialMessage.fileType,
          },
        },
      },
      include: {
        messages: true,
      },
    })

    return NextResponse.json(page)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating page' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const pages = await prisma.page.findMany({
      include: {
        messages: {
          include: {
            response: true,
          },
        },
      },
    })
    return NextResponse.json(pages)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching pages' }, { status: 500 })
  }
}

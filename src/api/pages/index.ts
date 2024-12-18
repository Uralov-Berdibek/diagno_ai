import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface PageData {
  path: string;
  name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { path, name }: PageData = req.body;

    try {
      const newPage = await prisma.page.create({
        data: {
          path,
          name,
          createDate: new Date(),
          updateDate: new Date(),
        },
      });
      return res.status(201).json(newPage);
    } catch (error) {
      return res.status(500).json({ error: 'Sahifa yaratishda xatolik yuz berdi' });
    }
  } else {
    return res.status(405).json({ error: 'Metod qo‘llab-quvvatlanmaydi' });
  }
}

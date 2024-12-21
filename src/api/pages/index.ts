import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface PageData {
  id: string;
  path: string;
  name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, path, name }: PageData = req.body;

    try {
      const newPage = await prisma.page.create({
        data: {
          id,
          path,
          name,
          createDate: new Date(),
          updateDate: new Date(),
        },
      });
      return res.status(201).json(newPage);
    } catch (error) {
      console.error('Error in POST /api/pages:', error);
      return res.status(500).json({ error: 'Failed to create the page.' });
    }
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const { name, path }: Partial<PageData> = req.body;

    try {
      const updatedPage = await prisma.page.update({
        where: { id: id as string },
        data: { name, path, updateDate: new Date() },
      });
      return res.status(200).json(updatedPage);
    } catch (error) {
      console.error('Error updating page:', error);
      return res.status(500).json({ error: 'Failed to update the page.' });
    }
  } else if (req.method === 'GET') {
    try {
      const pages = await prisma.page.findMany({
        orderBy: { createDate: 'desc' },
      });
      return res.status(200).json(pages);
    } catch (error) {
      console.error('Error in GET /api/pages:', error);
      return res.status(500).json({ error: 'Failed to fetch pages.' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

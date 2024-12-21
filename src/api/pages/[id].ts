import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

interface UpdatePageData {
  name?: string;
  path?: string;
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;

//   if (req.method === 'PUT') {
//     const { name, path }: UpdatePageData = req.body;

//     try {
//       const updatedPage = await prisma.page.update({
//         where: { id: String(id) },
//         data: {
//           ...(name && { name }),
//           ...(path && { path }),
//           updateDate: new Date(),
//         },
//       });

//       return res.status(200).json(updatedPage);
//     } catch (error) {
//       return res.status(500).json({ error: 'Yangilashda xatolik yuz berdi' });
//     }
//   } else {
//     return res.status(405).json({ error: 'Metod qo‘llab-quvvatlanmaydi' });
//   }
// }

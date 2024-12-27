import { prisma } from '@/lib/db';

export const query = {
  // Create a new page
  createPage: async (slug: string) => {
    try {
      return await prisma.page.create({
        data: {
          name: `untitled ${slug}`,
          path: `new-chat/${slug}`,
        },
      });
    } catch (error) {
      console.error('Create page query error:', error);
      throw error;
    }
  },

  // Get all pages
  getAllPages: async () => {
    try {
      return await prisma.page.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
    } catch (error) {
      console.error('Get all pages query error:', error);
      throw error;
    }
  },
};

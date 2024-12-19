// lib/api.ts
interface Page {
  id: number;
  path: string;
  name: string;
  createDate: string;
  updateDate: string;
}

export const createPage = async (path: string, name: string): Promise<Page> => {
  const response = await fetch('/api/pages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path, name }),
  });

  if (!response.ok) {
    throw new Error('Sahifa yaratishda xatolik yuz berdi');
  }

  return response.json();
};

export const updatePage = async (id: number, data: Partial<Page>): Promise<Page> => {
  const response = await fetch(`/api/pages/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Yangilashda xatolik yuz berdi');
  }

  return response.json();
};

export const getPage = async (id: number): Promise<Page> => {
  const response = await fetch(`/api/pages/${id}`);

  if (!response.ok) {
    throw new Error('Sahifa topilmadi');
  }

  return response.json();
};

import { v4 as uuidv4 } from 'uuid';

export interface Page {
  id: string;
  path: string;
  name: string;
  createdAt: string;
}

export const createPage = async (): Promise<Page> => {
  // Generate a unique UUID
  const id = uuidv4();

  // Define the path and name with the generated UUID
  const path = `/new-chat/${id}`;
  const name = `New Chat - ${id}`;

  try {
    const response = await fetch('/api/pages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        path,
        name,
        createDate: new Date().toISOString(),
        updateDate: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Failed to create the page.');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in createPage:', error);
    throw error; // Re-throw for upstream handling
  }
};

export const updatePage = async (id: string, data: Partial<Page>): Promise<Page> => {
  const response = await fetch(`/api/pages/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, updateDate: new Date().toISOString() }),
  });

  if (!response.ok) {
    throw new Error('Yangilashda xatolik yuz berdi');
  }

  return response.json();
};

export const getPage = async (id: string): Promise<Page> => {
  const response = await fetch(`/api/pages/${id}`);

  if (!response.ok) {
    throw new Error('Sahifa topilmadi');
  }

  return response.json();
};

export const getAllPages = async (): Promise<Page[]> => {
  try {
    const response = await fetch('/api/pages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Sahifalarni olishda xatolik yuz berdi');
    }

    const data: Page[] = await response.json();
    return data;
  } catch (error) {
    console.error('API chaqiruvida xatolik:', error);
    throw error;
  }
};

import axios from 'axios';

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

export interface Page {
  id: number;
  name: string;
  path: string;
  content: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Get all pages
export const getAllPages = async () => {
  const response = await axios.get(`${apiUrl}/pages`);
  return response.data;
};

// Get single page
export const getPage = async (id: number) => {
  const response = await axios.get(`${apiUrl}/pages/${id}`);
  return response.data;
};

// Create new page
export const createPage = async (data: { name: string; path: string; content: string }) => {
  const response = await axios.post(`${apiUrl}/pages`, data);
  return response.data;
};

// Update page
export const updatePage = async (id: number, data: { name?: string }) => {
  const response = await axios.patch(`${apiUrl}/pages/${id}`, data);
  return response.data;
};

// Delete page
export const deletePage = async (id: number) => {
  const response = await axios.delete(`${apiUrl}/pages/${id}`);
  return response.data;
};

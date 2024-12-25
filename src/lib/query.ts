import axios from 'axios';

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface MessageInput {
  content: string;
  fileUrl?: string;
  fileType?: 'PDF' | 'VOICE' | 'TEXT';
}

export interface PageInput {
  name: string;
  path: string;
  initialMessage: MessageInput;
}

export const pageApi = {
  // Create new page
  createPage: async (data: PageInput) => {
    const response = await api.post('/pages', data);
    return response.data;
  },

  // Get all pages
  getAllPages: async () => {
    const response = await api.get('/pages');
    return response.data;
  },

  // Get single page
  getPage: async (slug: string) => {
    const response = await api.get(`/pages/${slug}`);
    return response.data;
  },

  // Update page name
  updatePageName: async (slug: string, name: string) => {
    const response = await api.patch(`/pages/${slug}/name`, { name });
    return response.data;
  },

  // Toggle favorite
  toggleFavorite: async (slug: string) => {
    const response = await api.patch(`/pages/${slug}/favorite`);
    return response.data;
  },

  // Delete page
  deletePage: async (slug: string) => {
    const response = await api.delete(`/pages/${slug}`);
    return response.data;
  },

  // Add message to page
  addMessage: async (slug: string, message: MessageInput) => {
    const response = await api.post(`/pages/${slug}/messages`, message);
    return response.data;
  },

  // Get page messages
  getPageMessages: async (slug: string) => {
    const response = await api.get(`/pages/${slug}/messages`);
    return response.data;
  },

  // Share message
  shareMessage: async (messageId: string) => {
    const response = await api.post(`/messages/${messageId}/share`);
    return response.data;
  },
};

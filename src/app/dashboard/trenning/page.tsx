'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../../../components/shared/footer';

type Video = {
  id: string;
  title: string;
  thumbnail: string; // URL of the thumbnail image
  url: string; // URL of the video
  category: string; // Category of the video
  rating: number; // Rating out of 5
  isFavorite: boolean; // Whether the video is marked as favorite
};

const TrenningPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null); // Добавлено состояние

  // Mock function to simulate fetching video clips
  const fetchVideos = async () => {
    const mockVideos: Video[] = [
      {
        id: '1',
        title: 'Basic First Aid Techniques',
        thumbnail: 'https://improveme.se/wp-content/uploads/2017/06/lasvegas_stor1.jpg',
        url: 'https://www.example.com/video1.mp4',
        category: 'Health',
        rating: 4.5,
        isFavorite: true,
      },
      {
        id: '2',
        title: 'CPR for Beginners',
        thumbnail: 'https://peritossolutions.com/wp-content/uploads/2020/12/01.jpg',
        url: 'https://www.example.com/video2.mp4',
        category: 'Health',
        rating: 4.0,
        isFavorite: false,
      },
      {
        id: '3',
        title: 'Treating Burns and Cuts',
        thumbnail: 'https://kazzak.pro/storage/2022/03/10c2d0aa18889e0f32b5b175712a3fc0.jpg',
        url: 'https://www.example.com/video3.mp4',
        category: 'Safety',
        rating: 5.0,
        isFavorite: true,
      },
    ];
    setVideos(mockVideos);
    setFilteredVideos(mockVideos);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    let updatedVideos = videos;

    if (searchQuery) {
      updatedVideos = updatedVideos.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedCategory !== 'All') {
      updatedVideos = updatedVideos.filter((video) => video.category === selectedCategory);
    }

    if (minRating > 0) {
      updatedVideos = updatedVideos.filter((video) => video.rating >= minRating);
    }

    if (showFavorites) {
      updatedVideos = updatedVideos.filter((video) => video.isFavorite);
    }

    setFilteredVideos(updatedVideos);
  }, [searchQuery, selectedCategory, minRating, showFavorites, videos]);

  return (
    <div className='lg:pl-[21rem] px-5 py-4'>
      <h1 className='text-2xl font-bold mb-4'>Training Videos</h1>

      {/* Filters */}
      <div className='mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        <input
          type='text'
          placeholder='Search videos...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded bg-transparent'
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded bg-transparent'
        >
          <option
            className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
            value='All'
          >
            All Categories
          </option>
          <option
            className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
            value='Health'
          >
            Health
          </option>
          <option
            className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
            value='Safety'
          >
            Safety
          </option>
        </select>
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className='w-full p-2 border border-gray-300 rounded bg-transparent'
        >
          <option className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white' value={0}>
            All Ratings
          </option>
          <option className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white' value={1}>
            1 Star & Up
          </option>
          <option className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white' value={2}>
            2 Stars & Up
          </option>
          <option className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white' value={3}>
            3 Stars & Up
          </option>
          <option className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white' value={4}>
            4 Stars & Up
          </option>
          <option className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white' value={5}>
            5 Stars
          </option>
        </select>
        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            checked={showFavorites}
            onChange={(e) => setShowFavorites(e.target.checked)}
          />
          Show Favorites
        </label>
      </div>

      {/* Video List */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className='video-card relative'
            onMouseEnter={() => setHoveredVideo(video.id)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            {hoveredVideo === video.id ? (
              <video
                src={video.url}
                controls
                autoPlay
                muted
                className='rounded w-full h-[200px] object-cover'
              />
            ) : (
              <img
                src={video.thumbnail}
                alt={video.title}
                className='rounded w-full h-[200px] object-cover'
              />
            )}
            <h2 className='text-lg font-semibold mt-2 text-red-600 uppercase'>{video.title}</h2>
            <p className='text-gray-600 text-sm'>Category: {video.category}</p>
            <p className='text-gray-600 text-sm'>Rating: {video.rating} ⭐</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TrenningPage;

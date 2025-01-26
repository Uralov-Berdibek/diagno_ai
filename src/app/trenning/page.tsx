'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/shared/footer';
import Image from 'next/image';
import Link from 'next/link';

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
  rating: number;
  isFavorite: boolean;
  tagColor: string;
};

const TrenningPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  // Mock function to simulate fetching video clips
  const fetchVideos = async () => {
    const mockVideos: Video[] = [
      {
        id: '1',
        title: 'Birinchi yordamning asosiy usullari',
        thumbnail: 'https://improveme.se/wp-content/uploads/2017/06/lasvegas_stor1.jpg',
        url: '',
        category: 'Health',
        rating: 4.5,
        isFavorite: true,
        tagColor: 'text-indigo-500',
      },
      {
        id: '2',
        title: 'Yangi boshlanuvchilar uchun CPR',
        thumbnail: 'https://peritossolutions.com/wp-content/uploads/2020/12/01.jpg',
        url: '',
        category: 'Health',
        rating: 4.0,
        isFavorite: false,
        tagColor: 'text-purple-500',
      },
      {
        id: '3',
        title: 'Kuyishlar va kesishlarni davolash',
        thumbnail: 'https://kazzak.pro/storage/2022/03/10c2d0aa18889e0f32b5b175712a3fc0.jpg',
        url: '',
        category: 'Safety',
        rating: 5.0,
        isFavorite: true,
        tagColor: 'text-cyan-500',
      },
    ];
    setVideos(mockVideos);
    setFilteredVideos(mockVideos);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className='lg:pl-[21rem] px-5 py-4 mt-4'>
      <h1 className='mb-4 text-xl font-extrabold text-slate-900 dark:text-white md:text-2xl lg:text-3xl'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          Birincchi yordamlar
        </span>{' '}
        haqida videolar qismi.
      </h1>

      {/* Filters */}
      <div className='mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'></div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {filteredVideos.map((video) => (
          <Link href={`trenning/${video.id}`} key={video.id}>
            <li className='relative flex flex-col sm:flex-row xl:flex-col items-start bg-slate-50 dark:bg-slate-700/15 p-2 rounded-lg'>
              <div className='order-1 sm:ml-6 xl:ml-0'>
                <h3 className='mb-1 text-slate-900 font-semibold dark:text-slate-200'>
                  <span className={`mb-1 block text-sm leading-6 ${video.tagColor}`}>
                    {video.category}
                  </span>
                  {video.title}
                </h3>
              </div>
              <div className='mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full'>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  layout='responsive'
                  width={300}
                  height={200}
                  className='rounded-lg'
                />
              </div>
            </li>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TrenningPage;

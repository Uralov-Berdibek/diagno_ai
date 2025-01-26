'use client';
import React, { useState } from 'react';
import DoctorCard from '../../components/shared/doctors/card/doctor-card';
import doctorsData from '../../components/shared/doctors/data';
import Footer from '../../components/shared/footer';

const DoctorsPage = () => {
  const [likedDoctors, setLikedDoctors] = useState<number[]>([]); // Track liked doctors by their IDs
  const [category, setCategory] = useState('All'); // Track selected category
  const [showLiked, setShowLiked] = useState(false); // Toggle to show only liked doctors
  const [visibleCount, setVisibleCount] = useState(6); // Number of doctors to display

  const toggleLike = (id: number) => {
    setLikedDoctors((prev) =>
      prev.includes(id) ? prev.filter((docId) => docId !== id) : [...prev, id],
    );
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleShowLikedToggle = () => {
    setShowLiked((prev) => !prev);
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6); // Add 6 more doctors to the visible list
  };

  // Filter doctors by category and liked status
  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesCategory = category === 'All' || doctor.specialty === category;
    if (showLiked) {
      return likedDoctors.includes(doctor.id) && matchesCategory;
    }
    return matchesCategory;
  });

  return (
    <div className='p-4 lg:pl-[21rem] pr-6 mt-4'>
      <h1 className='mb-4 text-xl font-extrabold text-slate-900 dark:text-white md:text-2xl lg:text-3xl'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          Shifokorlar
        </span>{' '}
        royhati.
      </h1>

      <div className='mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10'>
        <select
          value={category}
          onChange={handleCategoryChange}
          className='w-full p-2 border border-gray-300 rounded bg-transparent'
        >
          <option
            className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
            value='All'
          >
            Barcha toifalar
          </option>
          <option
            className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
            value='Cardiology'
          >
            Kardiologiya
          </option>
          <option
            className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
            value='Pediatrics'
          >
            Pediatriya
          </option>
          <option
            className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
            value='Neurology'
          >
            Nevrologiya
          </option>
          <option
            className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
            value='Orthopedics'
          >
            Ortopediya
          </option>
        </select>

        <button
          onClick={handleShowLikedToggle}
          className={`p-2 rounded ${
            showLiked ? 'bg-slate-900 text-white' : 'bg-slate-500 text-white'
          }`}
        >
          {showLiked ? 'Barcha doktorlarni ko‘rsatish' : 'Like bosilgan doktorlar'}
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {filteredDoctors.slice(0, visibleCount).map((doctor) => (
          <DoctorCard
            key={doctor.id}
            slug={doctor.id}
            name={doctor.name}
            clinic={doctor.clinic}
            specialty={doctor.specialty}
            image={doctor.profileImage}
            isLiked={likedDoctors.includes(doctor.id)}
            toggleLike={() => toggleLike(doctor.id)}
          />
        ))}
      </div>

      {visibleCount < filteredDoctors.length && (
        <div className='mt-6 text-center'>
          <button
            onClick={handleSeeMore}
            className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Ko&#39;proq ko&#39;rish
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DoctorsPage;

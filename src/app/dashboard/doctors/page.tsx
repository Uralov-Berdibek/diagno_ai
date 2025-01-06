'use client';
import React, { useState } from 'react';
import DoctorCard from '../../../components/shared/doctors/card/doctor-card';
import doctors from '../../../components/shared/doctors/data'; // Import the list of 100 doctors

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [filter, setFilter] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 4); // Load 4 more doctors
  };

  const filteredDoctors = doctors.filter((doctor: any) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || doctor.specialty === category;

    // Implement filter logic for 'experience' or 'rating' if needed
    if (filter === 'experience') {
      return matchesSearch && matchesCategory && doctor.experience > 5; // Example filter
    }
    if (filter === 'rating') {
      return matchesSearch && matchesCategory && doctor.rating >= 4; // Example filter
    }

    return matchesSearch && matchesCategory;
  });

  return (
    <div className='p-4 lg:pl-[21rem] pr-6'>
      {/* Top Section */}
      <div className='mb-6'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {/* Search */}
          <input
            type='text'
            placeholder='Search doctors...'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full p-2 border border-gray-300 rounded bg-transparent'
          />

          {/* Category */}
          <select
            value={category}
            onChange={handleCategoryChange}
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
              value='Cardiology'
            >
              Cardiology
            </option>
            <option
              className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
              value='Pediatrics'
            >
              Pediatrics
            </option>
            <option
              className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
              value='Neurology'
            >
              Neurology
            </option>
            <option
              className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
              value='Orthopedics'
            >
              Orthopedics
            </option>
          </select>

          {/* Filter */}
          <select
            value={filter}
            onChange={handleFilterChange}
            className='w-full p-2 border border-gray-300 rounded bg-transparent'
          >
            <option
              className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
              value=''
            >
              Filter By
            </option>
            <option
              className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
              value='experience'
            >
              Experience
            </option>
            <option
              className='bg-gray-50 text-slate-900 dark:bg-slate-800 dark:text-white'
              value='rating'
            >
              Rating
            </option>
          </select>
        </div>
      </div>

      {/* Middle Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {filteredDoctors.slice(0, visibleCount).map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            clinic={doctor.clinic}
            specialty={doctor.specialty}
            contact1={doctor.contact1}
            email={doctor.email}
            image={doctor.profileImage}
            website='www.ai-diagno.netlify.app'
          />
        ))}
      </div>

      {/* Bottom Section */}
      {visibleCount < filteredDoctors.length && (
        <div className='mt-6 text-center'>
          <button
            onClick={handleSeeMore}
            className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorsPage;

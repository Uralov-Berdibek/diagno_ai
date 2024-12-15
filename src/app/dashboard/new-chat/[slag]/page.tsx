'use client';

import React, { useState } from 'react';
import SendMessages from '../../../../components/shared/dashboard/send-messages';
import Response from '../../../../components/shared/dashboard/response';
import DoctorCard from '../../../../components/shared/doctors/card/doctor-card';
import { useParams } from 'next/navigation';

const NewChatPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [messageSent, setMessageSent] = useState(false);
  const [responseData, setResponseData] = useState({
    requestType: '',
    requestContent: '',
    response: '',
  });

  // Example doctor data
  const doctors = [
    {
      name: 'Dr. John Doe',
      workplace: 'City Hospital',
      specialty: 'Cardiologist',
      phone: '123-456-7890',
      email: 'johndoe@example.com',
      profileImage: 'path/to/image.jpg',
    },
    {
      name: 'Dr. John Doe',
      workplace: 'City Hospital',
      specialty: 'Cardiologist',
      phone: '123-456-7890',
      email: 'johndoe@example.com',
      profileImage: 'path/to/image.jpg',
    },
    {
      name: 'Dr. John Doe',
      workplace: 'City Hospital',
      specialty: 'Cardiologist',
      phone: '123-456-7890',
      email: 'johndoe@example.com',
      profileImage: 'path/to/image.jpg',
    },
    // Add more doctor objects as needed
  ];

  const handleSendMessage = async (content: string, type: 'text' | 'file' | 'voice') => {
    // const slug = (await params).slug;
    // if (!slug) {
    //   console.error('Slug not found!');
    //   return;
    // }

    setMessageSent(true);
    setResponseData({
      requestType: type,
      requestContent: content,
      response: 'Sizning xabaringiz qabul qilindi.',
    });

    // Send chat data to the API
    // await fetch('/api/chats', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     path: `/new-chats/${slug}`,
    //     title: `Chat with ID: ${slug}`,
    //     user: 'Anonymous User', // Replace with dynamic user data
    //     createDate: new Date().toISOString(),
    //   }),
    // });
  };

  return (
    <div className='lg:pl-[21rem] pr-6'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <SendMessages onSend={handleSendMessage} />
        {messageSent && (
          <>
            <Response
              requestType={responseData.requestType as 'text' | 'file' | 'voice'}
              requestContent={responseData.requestContent}
              response={responseData.response}
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-4'>
              {doctors.map((doctor, index) => (
                <DoctorCard
                  key={index}
                  name={doctor.name}
                  workplace={doctor.workplace}
                  specialty={doctor.specialty}
                  phone={doctor.phone}
                  email={doctor.email}
                  profileImage={doctor.profileImage}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewChatPage;

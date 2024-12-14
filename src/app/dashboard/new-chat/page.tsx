'use client';

import React, { useState } from 'react';
import SendMessages from '../../../components/shared/dashboard/send-messages';
import Response from '../../../components/shared/dashboard/response';
import DoctorCard from '../../../components/shared/doctors/card/doctor-card';

const NewChatPage = () => {
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
    // Add more doctor objects as needed
  ];

  const handleSendMessage = (content: string, type: 'text' | 'file' | 'voice') => {
    setMessageSent(true);
    setResponseData({
      requestType: type,
      requestContent: content,
      response: 'Your message has been received.',
    });
  };

  return (
    <div className='lg:pl-[21rem] pr-6'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <SendMessages onSend={handleSendMessage} />
        {messageSent && (
          <>
            <Response
              requestType={responseData.requestType as 'text' | 'file' | 'sound'}
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

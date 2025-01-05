'use client';

import React, { useState } from 'react';
import SendMessages from '../../../../components/shared/dashboard/send-messages';
import Response from '../../../../components/shared/dashboard/response';
import DoctorCard from '../../../../components/shared/doctors/card/doctor-card';
import doctors from '../../../../components/shared/doctors/data';
const NewChatPage = ({ params }: { params: Promise<{ slag: string }> }) => {
  const [messageSent, setMessageSent] = useState(false);
  const [responseData, setResponseData] = useState({
    requestType: '',
    requestContent: '',
    response: '',
  });

  const handleSendMessage = async (content: string, type: 'text' | 'file' | 'voice') => {
    const slag = (await params).slag;
    if (!slag) {
      console.error('Slug not found!');
      return;
    }

    setMessageSent(true);
    setResponseData({
      requestType: type,
      requestContent: content,
      response: 'Sizning xabaringiz qabul qilindi.',
    });
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
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mt-6'>
              {doctors.slice(4).map((doctor) => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default NewChatPage;

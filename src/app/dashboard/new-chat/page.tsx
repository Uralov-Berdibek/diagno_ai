'sue client';

import React from 'react';
import SendMessages from '../../../components/shared/dashboard/send-messages';
import Response from '../../../components/shared/dashboard/response';
import DoctorCard from '../../../components/shared/doctors/card/doctor-card';

const doctors = [
  {
    name: 'Dr. Alice Johnson',
    workplace: 'Central Hospital',
    specialty: 'Cardiology',
    phone: '+998 90 123 45 67',
    email: 'alice.johnson@example.com',
    profileImage: '@/assets/avatar-1.png',
  },
  {
    name: 'Dr. Bob Smith',
    workplace: 'City Clinic',
    specialty: 'Neurology',
    phone: '+998 91 987 65 43',
    email: 'bob.smith@example.com',
    profileImage: '@/assets/avatar-2.png',
  },
  {
    name: 'Dr. Clara Adams',
    workplace: 'Family Health Center',
    specialty: 'Pediatrics',
    phone: '+998 93 112 33 44',
    email: 'clara.adams@example.com',
    profileImage: '@/assets/avatar-3.png',
  },
];

const NewChatPage = () => {
  return (
    <div className='lg:pl-[21rem] pr-6'>
      <div className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>
        <SendMessages />
        <Response
          requestType='sound'
          requestContent='https://example.com/voice-message.ogg'
          response='Your voice message has been transcribed successfully.'
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
      </div>
    </div>
  );
};

export default NewChatPage;

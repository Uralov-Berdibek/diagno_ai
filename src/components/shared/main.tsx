import Image from 'next/image';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0f4d4d] to-[#1e8a8a] flex flex-col items-center py-10 px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-white mb-10 text-center'>
        Sizning AI yordamchingiz
      </h1>
      <div className='flex flex-col gap-8 w-full max-w-4xl'>
        <div className='flex flex-col md:flex-row items-center bg-[#0f4d4d] rounded-xl shadow-lg overflow-hidden w-full'>
          <Image
            src='https://avatars.mds.yandex.net/i?id=430b68bb7d350c98ea63f56dc3d65bf83fddc499-8273295-images-thumbs&n=13'
            alt="Foydalanuvchi sog'liq haqida"
            className='h-[320px] w-auto object-cover p-6'
            width={200}
            height={320}
          />
          <div className='p-6 md:p-8 flex flex-col justify-center text-white w-full'>
            <h2 className='text-xl md:text-2xl font-semibold mb-4'>
              Foydalanuvchi sog&apos;liq haqida ma&apos;lumot berishi
            </h2>
            <p className='mb-6'>
              Foydalanuvchi matn orqali o&apos;zining sog&apos;lig&apos;i haqida batafsil
              ma&apos;lumotlarni kiritishi mumkin. Ushbu ma&apos;lumotlar tahlil uchun serverga
              yuboriladi.
            </p>
            <button className='bg-[#1e8a8a] hover:bg-[#146a6a] px-4 py-2 rounded-md font-semibold transition'>
              Batafsil
            </button>
          </div>
        </div>

        <div className='flex flex-col md:flex-row-reverse items-center bg-[#0f4d4d] rounded-xl shadow-lg overflow-hidden w-full'>
          <Image
            src='https://avatars.mds.yandex.net/i?id=5a39e175c4cf4603b40eb408e21dfaf428f8eaf5-7546740-images-thumbs&n=13'
            alt="Do'ktorlar tahlili"
            className='h-[320px] w-auto object-cover p-6'
            width={200}
            height={320}
          />
          <div className='p-6 md:p-8 flex flex-col justify-center text-white w-full'>
            <h2 className='text-xl md:text-2xl font-semibold mb-4'>
              Doktorlar tahliliga asoslangan ma&apos;lumot
            </h2>
            <p className='mb-6'>
              Doktorlar tomonidan berilgan analiz natijalari asosida foydalanuvchiga aniq va
              tushunarli tavsiyalar beriladi.
            </p>
            <button className='bg-[#1e8a8a] hover:bg-[#146a6a] px-4 py-2 rounded-md font-semibold transition'>
              Batafsil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

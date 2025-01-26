import React from 'react';
import Description from '../../../components/shared/docs/description';
import DocsVideo from '../../../components/shared/docs/docs-video';
import Footer from '../../../components/shared/footer';

const howDoWeUse = () => {
  return (
    <div>
      <h1 className='mb-4 text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl lg:text-7xl mt-20'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          Diagno AI
        </span>{' '}
        qanday ishlatamiz?
      </h1>
      <Description
        fristDesc='Diagno AI – bu zamonaviy sun’iy intellektga asoslangan innovatsion platforma bo‘lib, foydalanuvchilarga kasalliklarni aniqlash, tahlil qilish va davolash bo‘yicha tavsiyalar berishga mo‘ljallangan. Platforma foydalanuvchilar tomonidan kiritilgan simptomlar va tahlil natijalarini sun’iy intellekt yordamida chuqur tahlil qiladi va ehtimoliy tashxislarni aniqlaydi. Diagno AI sog‘liqni saqlash sohasida yuzaga kelishi mumkin bo‘lgan xatoliklarni kamaytirishga, davolash jarayonlarini tezlashtirishga va shifokorlar bilan bemorlar o‘rtasidagi jarayonlarni soddalashtirishga yordam beradi. Ushbu texnologiya tibbiy xatolarning oldini olish uchun keng miqyosda tibbiy bilimlar bazasidan foydalanadi, bu esa foydalanuvchilarga aniq va ishonchli natijalar taqdim etadi.'
        secondDesc='Diagno AI nafaqat kasalliklarni aniqlash bilan cheklanmaydi, balki foydalanuvchilarga mos davolash usullari va sog‘lomlashtirish bo‘yicha tavsiyalar beradi. Bu tavsiyalar dunyoning yetakchi tibbiy tadqiqotlariga asoslangan bo‘lib, foydalanuvchilarga vaqtni tejash va shifokorga tashrifdan oldin kerakli tayyorgarlik ko‘rish imkonini beradi. Bundan tashqari, platforma foydalanuvchilarni keng ko‘lamli tibbiy ma’lumotlar bilan tanishtiradi, shu jumladan, kasalliklarning sabablari, ularning belgilari va davolash usullari bo‘yicha batafsil ma’lumotlar bilan ta’minlaydi.'
      />
      <DocsVideo title="Diagno AI qanday qilib to'g'ri ishlatamiz?" videoUrl='' />
      <div className='mt-10'>
        <h1 className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white'>
          Get back to growth with{' '}
          <span className='text-blue-600 dark:text-blue-500'>the world's #1</span> CRM.
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default howDoWeUse;

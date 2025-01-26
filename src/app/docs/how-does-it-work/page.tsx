import React from 'react';
import Footer from '../../../components/shared/footer';
import DocsVideo from '../../../components/shared/docs/docs-video';
import Description from '../../../components/shared/docs/description';
import About from '../../../components/shared/docs/about';

const howDoesItWork = () => {
  return (
    <div>
      <h1 className='mb-4 text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl lg:text-7xl mt-20'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          Diagno AI
        </span>{' '}
        qanday ishlaydi?
      </h1>
      <Description
        fristDesc='Diagno AI – bu zamonaviy sun’iy intellektga asoslangan innovatsion platforma bo‘lib, foydalanuvchilarga kasalliklarni aniqlash, tahlil qilish va davolash bo‘yicha tavsiyalar berishga mo‘ljallangan. Platforma foydalanuvchilar tomonidan kiritilgan simptomlar va tahlil natijalarini sun’iy intellekt yordamida chuqur tahlil qiladi va ehtimoliy tashxislarni aniqlaydi. Diagno AI sog‘liqni saqlash sohasida yuzaga kelishi mumkin bo‘lgan xatoliklarni kamaytirishga, davolash jarayonlarini tezlashtirishga va shifokorlar bilan bemorlar o‘rtasidagi jarayonlarni soddalashtirishga yordam beradi. Ushbu texnologiya tibbiy xatolarning oldini olish uchun keng miqyosda tibbiy bilimlar bazasidan foydalanadi, bu esa foydalanuvchilarga aniq va ishonchli natijalar taqdim etadi.'
        secondDesc='Diagno AI nafaqat kasalliklarni aniqlash bilan cheklanmaydi, balki foydalanuvchilarga mos davolash usullari va sog‘lomlashtirish bo‘yicha tavsiyalar beradi. Bu tavsiyalar dunyoning yetakchi tibbiy tadqiqotlariga asoslangan bo‘lib, foydalanuvchilarga vaqtni tejash va shifokorga tashrifdan oldin kerakli tayyorgarlik ko‘rish imkonini beradi. Bundan tashqari, platforma foydalanuvchilarni keng ko‘lamli tibbiy ma’lumotlar bilan tanishtiradi, shu jumladan, kasalliklarning sabablari, ularning belgilari va davolash usullari bo‘yicha batafsil ma’lumotlar bilan ta’minlaydi.'
      />
      <DocsVideo title='Diagno AI qanday ishlaydi va malumotlarni qayerdan oladi?' videoUrl='' />
      <About />
      <Footer />
    </div>
  );
};

export default howDoesItWork;

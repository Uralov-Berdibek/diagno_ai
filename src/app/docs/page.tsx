import React from 'react';
import Footer from '../../components/shared/footer';
import Docs from '../../components/shared/resources/docs';
import Description from '../../components/shared/docs/description';
import DocsVideo from '../../components/shared/docs/docs-video';
import Accordion from '../../components/shared/docs/accordion';

const accordionData = [
  {
    id: 1,
    heading: 'Diagno AI qanday ishlaydi?',
    body: `Diagno AI foydalanuvchilarning kiritgan simptomlari yoki tahlil natijalarini sun’iy intellekt algoritmlari yordamida tahlil qiladi. Platforma kasalliklar haqidagi keng ma’lumotlar bazasidan foydalanib, ehtimoliy tashxislarni aniqlaydi va ular bo‘yicha mos davolash usullari haqida tavsiyalar beradi. Sun’iy intellekt real vaqt rejimida ishlaydi va ma’lumotlarni tahlil qilish tezligi tufayli foydalanuvchilar bir necha soniya ichida natijalarga ega bo‘lishadi. Bu tizim, shuningdek, foydalanuvchilarga tibbiy ma’lumotlarni shifokor bilan bo‘lishish imkoniyatini beradi.`,
    link: {
      text: 'boshlamoq',
      url: '#',
    },
  },
  {
    id: 2,
    heading: 'Diagno AI xavfsizmi va foydalanuvchi ma’lumotlari qanday himoyalangan?',
    body: `Ha, Diagno AI foydalanuvchilarning ma’lumotlarini himoya qilishga katta e’tibor qaratadi. Platformada barcha ma’lumotlar shifrlangan va xavfsiz serverlarda saqlanadi. HTTPS protokoli yordamida ma’lumotlar almashinuvi amalga oshiriladi, bu esa uchinchi shaxslar tomonidan ma’lumotlarni o‘qib olishni oldini oladi. Bundan tashqari, foydalanuvchilar ma’lumotlarini faqat o‘z ruxsatlari asosida boshqalar bilan bo‘lishishlari mumkin. Diagno AI foydalanuvchilarning shaxsiy ma’lumotlarini maxfiy saqlashni va ulardan faqat sog‘liqni saqlashni yaxshilash maqsadida foydalanishni kafolatlaydi.`,
    link: {
      text: 'Mening Sahifam',
      url: '#',
    },
  },
  {
    id: 3,
    heading:
      'Diagno AI platformasi qanday imkoniyatlarni taqdim etadi va undan kimlar foydalanishi mumkin?',
    body: `Diagno AI nafaqat bemorlar uchun, balki shifokorlar uchun ham mo‘ljallangan. Platforma bemorlarga o‘z simptomlarini aniqlash va davolash bo‘yicha tavsiyalar olish imkonini beradi, shuningdek, shifokorlarga tashxis jarayonini tezlashtirish uchun yordam beradi.`,
    links: [
      { text: 'Mening Faylarim', url: '#' },
      { text: 'Mening Sahifam', url: '#' },
    ],
  },
];

const docs = () => {
  return (
    <div>
      <h1 className='mb-4 text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl lg:text-7xl mt-20'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          Diagno AI
        </span>{' '}
        Jamoasi.
      </h1>
      <Description
        fristDesc='Diagno AI – bu zamonaviy sun’iy intellektga asoslangan innovatsion platforma bo‘lib, foydalanuvchilarga kasalliklarni aniqlash, tahlil qilish va davolash bo‘yicha tavsiyalar berishga mo‘ljallangan. Platforma foydalanuvchilar tomonidan kiritilgan simptomlar va tahlil natijalarini sun’iy intellekt yordamida chuqur tahlil qiladi va ehtimoliy tashxislarni aniqlaydi. Diagno AI sog‘liqni saqlash sohasida yuzaga kelishi mumkin bo‘lgan xatoliklarni kamaytirishga, davolash jarayonlarini tezlashtirishga va shifokorlar bilan bemorlar o‘rtasidagi jarayonlarni soddalashtirishga yordam beradi. Ushbu texnologiya tibbiy xatolarning oldini olish uchun keng miqyosda tibbiy bilimlar bazasidan foydalanadi, bu esa foydalanuvchilarga aniq va ishonchli natijalar taqdim etadi.'
        secondDesc='Diagno AI nafaqat kasalliklarni aniqlash bilan cheklanmaydi, balki foydalanuvchilarga mos davolash usullari va sog‘lomlashtirish bo‘yicha tavsiyalar beradi. Bu tavsiyalar dunyoning yetakchi tibbiy tadqiqotlariga asoslangan bo‘lib, foydalanuvchilarga vaqtni tejash va shifokorga tashrifdan oldin kerakli tayyorgarlik ko‘rish imkonini beradi. Bundan tashqari, platforma foydalanuvchilarni keng ko‘lamli tibbiy ma’lumotlar bilan tanishtiradi, shu jumladan, kasalliklarning sabablari, ularning belgilari va davolash usullari bo‘yicha batafsil ma’lumotlar bilan ta’minlaydi.'
      />
      <DocsVideo title='Diagno AI va Loyiha Jamoasi' videoUrl='' />
      <Description
        fristDesc='Diagno AI loyihasi hozirda o‘zining birinchi versiyasida bo‘lib, platforma asosiy funksionalliklarni taqdim etadi. Birinchi versiyada foydalanuvchilar simptomlarni kiritib, kasalliklar ro‘yxati va ularga mos davolash usullari haqida ma’lumot olishlari mumkin. Hozirgi bosqichda platforma asosiy tibbiy ma’lumotlar bazasiga asoslangan bo‘lib, kelgusida yangi funksiyalar va imkoniyatlar qo‘shilishi rejalashtirilgan. Diagno AI ning birinchi versiyasi foydalanuvchi tajribasini o‘rganish va takomillashtirish uchun mo‘ljallangan. Keyingi bosqichlarda platformaga kengaytirilgan tahlil usullari, real vaqt rejimida maslahatlar va qo‘shimcha funksiyalar qo‘shilishi kutilmoqda.'
        secondDesc='Platforma shuningdek, shifokorlar bilan yaqin hamkorlik qilish imkonini beradi. Foydalanuvchi tomonidan olingan tashxis natijalari va tavsiyalarni shifokorlar bilan bo‘lishish mumkin, bu esa tibbiy ko‘rik jarayonlarini soddalashtiradi va samaradorlikni oshiradi. Mobil va kompyuter qurilmalari uchun optimallashtirilgan interfeys har qanday foydalanuvchi uchun qulay foydalanishni ta’minlaydi. Loyiha nafaqat sog‘liqni saqlashni raqamlashtirishga qaratilgan, balki odamlar hayot sifatini yaxshilash va sog‘liqni saqlash tizimidagi jarayonlarni optimallashtirishni maqsad qiladi. Diagno AI kelajakda sun’iy intellekt yordamida tibbiy sohada yangi imkoniyatlar eshigini ochishga intilmoqda.'
      />
      <Accordion accordionData={accordionData} />
      <Docs />
      <Footer />
    </div>
  );
};

export default docs;

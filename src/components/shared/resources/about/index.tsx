import React from 'react';
import AboutItem from './about-item';

const aboutItems = [
  {
    title: 'Tibbiy Diagnostika',
    subtitle: "Tibbiy Ma'lumotlar Bilan Tahlil.",
    description: [
      "AI tahlil jarayonida ishlatilgan tibbiy diagnostika ma'lumotlari bilan tanishing. Ushbu ma'lumotlar sog'liqni saqlash sohasidagi ilg'or qarorlarni qabul qilish uchun asos bo'ladi",
      "Tibbiy diagnostika va sog'liqni saqlash uchun mo'ljallangan ma'lumotlar to'plami. Kasalliklarni aniqlash va davolash jarayonlarini takomillashtirishga yordam beradi.",
    ],
    link: '#',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    imageAlt: 'Image',
  },
  {
    title: 'AI Tavsiyalar',
    subtitle: 'Kasalliklar va Davolash',
    description: [
      "AI tomonidan ishlatiladigan kasalliklar va davolash bo'yicha ma'lumotlar to'plami. Kasalliklar diagnostikasi va davolash jarayonini osonlashtiradi.",
      "Kasalliklar haqida batafsil ma'lumot va davolash usullari AI diagnostikasi uchun muhim manba sifatida keltirilgan.",
    ],
    link: '#',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    imageAlt: 'Image',
  },
];

const About = () => {
  return (
    <section>
      <h2 className='mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200'>
        Tibbiy Diagnostika Ma&#39;lumotlari Bazasi
      </h2>
      <div className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark'>
        <p>
          Bu bo&#39;limda tibbiy diagnostika jarayonlarini qo&#39;llab-quvvatlash uchun ishlatilgan
          keng qamrovli ma&#39;lumotlar to&#39;plami keltirilgan. U sog&#39;liqni saqlash
          bo&#39;yicha eng so&#39;nggi tadqiqotlar, statistik ma&#39;lumotlar va klinik tahlillardan
          iborat.
        </p>
      </div>
      <ul className='sm:space-y-6'>
        {aboutItems.map((item, index) => (
          <AboutItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default About;

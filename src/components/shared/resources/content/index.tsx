import React from 'react';
import ContentItem from './content-item';
const contentItems = [
  {
    title: 'AI Diagnostika',
    subtitle: 'Tibbiyot sohasida diagnostika',
    description:
      'AI diagnostika jarayonlarini tezlashtirish va aniqroq qilish uchun yangi texnologiya joriy etildi. Tibbiy sohada bu algoritm haqiqiy inqilobdir. Bu sizlar uchun.',
    link: 'https://headlessui.dev',
    image: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    tag: 'Headless UI',
    tagColor: 'text-indigo-500',
  },
  {
    title: "AI Ma'lumotlari",
    subtitle: "AI diagnostikasi: Ma'lumotlar bazasi yangilanishi.",
    description:
      "AI ma'lumotlar bazasiga yangi kasalliklar va ularning davolash usullari qo'shildi. Bu yangilanish diagnostika imkoniyatlarini yanada kengaytiradi.",
    link: 'https://heroicons.com',
    image: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    tag: 'Heroicons',
    tagColor: 'text-purple-500',
  },
  {
    title: "Sog'liqni Saqlash",
    subtitle: "Tibbiyotda AI: Sog'liqni Saqlashda Tahlil Yutuqlari",
    description:
      "AI tahlil texnologiyalari sog'liqni saqlash sohasida innovatsion natijalarga erishish imkonini beradi. Diagnostika jarayonlari endi tezroq va aniqroq.",
    link: 'https://heropatterns.com',
    image: 'https://miro.medium.com/v2/resize:fit:720/1*0KHwf5IFEwJ8l0HEnc1hAg.jpeg',
    tag: 'Hero Patterns',
    tagColor: 'text-cyan-500',
  },
];
const Content = () => {
  return (
    <section>
      <h2 className='mb-2 text-2xl leading-7 tracking-tight text-slate-900 font-bold dark:text-slate-200'>
        So&#39;nggi Yangiliklar va Bloglar
      </h2>
      <div className='mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark'>
        <p>
          AI loyihamizning eng so&#39;nggi yangiliklari, ilmiy maqolalar va innovatsion ishlanmalar
          bilan tanishing. Bloglarimizda siz diagnostika jarayonlari va ilg&#39;or texnologiyalar
          haqida batafsil ma&#39;lumot olishingiz mumkin.
        </p>
      </div>
      <ul className='grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start'>
        {contentItems.map((item, index) => (
          <ContentItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Content;

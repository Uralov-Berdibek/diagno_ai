import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';
import { ClerkProvider } from '@clerk/nextjs';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "AI Diagnostika Platformasi • Sog'liqni Aqlli Tahlil Qiling",
  description:
    'Tibbiy holatingizni tez va aniq tahlil qilish uchun AI yordamidan foydalaning. Anlizlaringizni yuklang yoki holatingizni yozib qoldiring va shaxsiy diagnostika natijalaringizni oling.',
  openGraph: {
    title: "AI Diagnostika Platformasi • Sog'liqni Aqlli Tahlil Qiling",
    description:
      'Tibbiy holatingizni tez va aniq tahlil qilish uchun AI yordamidan foydalaning. Anlizlaringizni yuklang yoki holatingizni yozib qoldiring va shaxsiy diagnostika natijalaringizni oling.',
    images: [
      {
        url: 'https://cdn.techjockey.com/blog/wp-content/uploads/2018/08/30121155/6-ways-al-revolutionizing-healthcare-ecosystem_feature.jpg?d=840',
        width: 1200,
        height: 630,
        alt: 'AI Tibbiy Diagnostika',
      },
    ],
    url: 'https://yourwebsite.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Diagnostika Platformasi • Sog'liqni Aqlli Tahlil Qiling",
    description:
      'Tibbiy holatingizni tez va aniq tahlil qilish uchun AI yordamidan foydalaning. Anlizlaringizni yuklang yoki holatingizni yozib qoldiring va shaxsiy diagnostika natijalaringizni oling.',
    images:
      'https://cdn.techjockey.com/blog/wp-content/uploads/2018/08/30121155/6-ways-al-revolutionizing-healthcare-ecosystem_feature.jpg?d=840',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={clsx(inter.className, 'antialiased')}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

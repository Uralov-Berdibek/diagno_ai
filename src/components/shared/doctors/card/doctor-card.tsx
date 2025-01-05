import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../../../ui/card';
import Image from 'next/image';
import { Mail, Phone, Heart, Link } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  clinic: string;
  specialty: string;
  contact1: string;
  email: string;
  image: string;
  website: string;
}

export default function DoctorCard({
  name,
  clinic,
  specialty,
  contact1,
  email,
  image,
  website,
}: DoctorCardProps) {
  return (
    <Card className='w-full max-w-xs mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg transition-all duration-300'>
      {/* Header with Doctor Image */}
      <CardHeader className='flex flex-col items-center space-y-4 py-6'>
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className='rounded-full border-4 border-white shadow-lg h-[150px]'
        />
        <div className='text-center'>
          <CardTitle className='text-xl font-semibold text-gray-900 dark:text-white'>
            {name}
          </CardTitle>
          <CardDescription className='text-sm text-gray-600 dark:text-gray-300'>
            {clinic}
          </CardDescription>
        </div>
      </CardHeader>

      {/* Main Content Section */}
      <CardContent className='px-6 py-4 space-y-3'>
        <p className='text-base text-gray-700 dark:text-gray-300'>
          <span className='font-semibold'>Specialty:</span> {specialty}
        </p>
      </CardContent>

      {/* Footer with Icons */}
      <CardFooter className='flex justify-evenly items-center bg-gray-100 dark:bg-slate-900 py-3'>
        {/* Favorite Icon */}
        <Heart size={20} className='text-red-500 cursor-pointer hover:text-red-600' />

        {/* Phone Icon */}
        <a
          href={`tel:${contact1}`}
          aria-label='Call'
          className='text-blue-500 cursor-pointer hover:text-blue-600'
        >
          <Phone size={20} />
        </a>

        {/* Email Icon */}
        <a
          href={`mailto:${email}`}
          aria-label='Email'
          className='text-blue-500 cursor-pointer hover:text-blue-600'
        >
          <Mail size={20} />
        </a>

        {/* Website Icon */}
        <a
          href={website}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Website'
          className='text-blue-500 cursor-pointer hover:text-blue-600'
        >
          <Link size={20} />
        </a>
      </CardFooter>
    </Card>
  );
}

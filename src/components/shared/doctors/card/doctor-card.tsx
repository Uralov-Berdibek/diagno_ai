import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../../../ui/avatar';
import { Mail, Phone } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  workplace: string;
  specialty: string;
  phone: string;
  email: string;
  profileImage: string;
}

export default function DoctorCard({
  name,
  workplace,
  specialty,
  phone,
  email,
  profileImage,
}: DoctorCardProps) {
  return (
    <Card className='w-full max-w-md mx-auto border dark:border-gray-600 mt-8 bg-white/20 dark:bg-slate-900/20'>
      <CardHeader className='flex items-center space-x-4'>
        <Avatar>
          <AvatarImage src={profileImage} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className='text-gray-900 dark:text-white'>{name}</CardTitle>
          <CardDescription className='text-gray-500 dark:text-gray-400'>
            {workplace}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className='space-y-2'>
        <p className='text-sm text-gray-700 dark:text-gray-300'>{specialty}</p>
        <div className='flex items-center space-x-2'>
          <Phone size={16} className='text-gray-500 dark:text-gray-400' />
          <p className='text-sm text-gray-700 dark:text-gray-300'>{phone}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <Mail size={16} className='text-gray-500 dark:text-gray-400' />
          <p className='text-sm text-gray-700 dark:text-gray-300'>{email}</p>
        </div>
      </CardContent>
    </Card>
  );
}

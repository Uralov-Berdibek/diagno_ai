'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RatedPage: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState<{ rating: number; comment: string }[]>([]);
  const router = useRouter();

  const handleSubmit = () => {
    if (rating > 0 && comment.trim()) {
      setReviews([...reviews, { rating, comment }]);
      setRating(0);
      setComment('');
      router.push('dashboard/1236');
    }
  };

  return (
    <div className='min-h-screen bg-[#0f4d4d] text-white flex flex-col items-center p-6'>
      <h1 className='text-3xl font-bold mb-6'>Rated Page</h1>

      <div className='bg-[#1e8a8a] p-6 rounded-lg shadow-md max-w-md w-full'>
        <h2 className='text-xl font-semibold mb-4'>Leave Your Rating</h2>

        <div className='flex items-center gap-2 mb-4'>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          className='w-full bg-[#0a3d40] text-white p-2 rounded-md resize-none'
          rows={4}
          placeholder='Write your comment...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className='bg-[#1e8a8a] hover:bg-[#0f4d4d] text-white font-semibold py-2 px-4 rounded-md mt-4 w-full transition'
          disabled={rating === 0 || !comment.trim()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatedPage;

'use client';

import { useState } from 'react';
import { FileText, PlayCircle, Copy, Share2, Heart, Save } from 'lucide-react';

type RequestType = 'text' | 'file' | 'sound';

interface RequestResponseProps {
  requestType: RequestType;
  requestContent: string;
  response: string;
}

const Response: React.FC<RequestResponseProps> = ({ requestType, requestContent, response }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    alert('Response copied to clipboard!');
  };

  const handleListen = () => {
    const utterance = new SpeechSynthesisUtterance(response);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className='p-4 border border-gray-300 rounded-lg space-y-4 dark:bg-gray-800 dark:border-gray-600 ml-4'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-2'>
        {requestType === 'text' && (
          <p className='bg-gray-100 p-2 rounded-lg text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
            {requestContent}
          </p>
        )}
        {requestType === 'file' && (
          <div className='flex items-center space-x-2 bg-gray-100 p-2 rounded-lg dark:bg-gray-700'>
            <FileText size={20} className='text-gray-500 dark:text-gray-400' />
            <span className='text-gray-800 dark:text-gray-200'>{requestContent}</span>
          </div>
        )}
        {requestType === 'sound' && (
          <div className='flex items-center space-x-2 bg-gray-100 p-2 rounded-lg dark:bg-gray-700'>
            <PlayCircle size={24} className='text-gray-500 dark:text-gray-400' />
            <audio controls>
              <source src={requestContent} />
            </audio>
          </div>
        )}
      </div>
      <p className='bg-gray-100 p-4 rounded-lg dark:dark:bg-gray-700'>{response}</p>
      <div className='flex space-x-4'>
        <button onClick={handleCopy}>
          <Copy size={18} />
        </button>
        <button onClick={handleListen}>
          <PlayCircle size={18} />
        </button>
        <button onClick={() => setLiked(!liked)}>
          <Heart size={18} className={liked ? 'text-red-500' : 'text-gray-500'} />
        </button>
        <button onClick={() => setSaved(!saved)}>
          <Save size={18} className={saved ? 'text-green-500' : 'text-gray-500'} />
        </button>
      </div>
    </div>
  );
};

export default Response;

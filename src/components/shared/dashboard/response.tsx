'use client';

import { useState } from 'react';
import { FileText, PlayCircle, Copy, Share2, Heart, Save } from 'lucide-react';

type RequestType = 'text' | 'file' | 'sound';

interface RequestResponseProps {
  requestType: RequestType;
  requestContent: string; // Text or file name or voice message URL
  response: string;
}

export default function Response({ requestType, requestContent, response }: RequestResponseProps) {
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

  const handleSave = () => {
    setSaved(true);
    alert('Response saved successfully!');
  };

  return (
    <div className='p-4 border border-gray-300 rounded-lg space-y-4 dark:bg-gray-800 dark:border-gray-600 ml-4'>
      {/* Request Section */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-2'>
        {requestType === 'text' && (
          <p className='bg-gray-100 p-2 rounded-lg text-gray-800 dark:bg-gray-700 dark:text-gray-200 w-full sm:w-auto'>
            {requestContent}
          </p>
        )}
        {requestType === 'file' && (
          <div className='flex items-center space-x-2 bg-gray-100 p-2 rounded-lg dark:bg-gray-700 w-full sm:w-auto'>
            <FileText size={20} className='text-gray-500 dark:text-gray-400' />
            <span className='text-gray-800 dark:text-gray-200 truncate'>{requestContent}</span>
          </div>
        )}
        {requestType === 'sound' && (
          <div className='bg-gray-100 p-2 rounded-lg flex items-center space-x-2 dark:bg-gray-700 w-full sm:w-auto'>
            <PlayCircle size={24} className='text-gray-500 dark:text-gray-400' />
            <span className='text-gray-800 dark:text-gray-200'>Voice message:</span>
            <audio controls className='w-full sm:w-auto'>
              <source src={requestContent} />
              Your browser does not support the audio tag.
            </audio>
          </div>
        )}
      </div>

      {/* Response Section */}
      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
        <p className='text-gray-800 dark:text-gray-200 break-words'>{response}</p>
        <div className='flex flex-wrap space-x-4 mt-2'>
          <button
            onClick={handleCopy}
            className='flex items-center space-x-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600'
          >
            <Copy size={18} />
          </button>
          <button
            onClick={handleListen}
            className='flex items-center space-x-1 text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600'
          >
            <PlayCircle size={18} />
          </button>
          <button
            onClick={() => alert('Share functionality not implemented yet!')}
            className='flex items-center space-x-1 text-purple-500 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-600'
          >
            <Share2 size={18} />
          </button>
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center space-x-1 ${
              liked
                ? 'text-red-500'
                : 'text-gray-500 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-600'
            }`}
          >
            <Heart size={18} />
          </button>
          <button
            onClick={handleSave}
            className={`flex items-center space-x-1 ${
              saved
                ? 'text-green-500 dark:text-green-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-600'
            }`}
          >
            <Save size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

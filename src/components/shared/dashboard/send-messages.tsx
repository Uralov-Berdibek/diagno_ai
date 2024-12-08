'use client';

import React, { useState, useRef } from 'react';
import { Paperclip, Mic } from 'lucide-react';
const SendMessages = () => {
  const [comment, setComment] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);

    // Adjust the height dynamically
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  };
  return (
    <div className='flex items-center space-x-2 border border-gray-300 rounded-lg p-2 my-8 ml-4'>
      <div className='flex items-center gap-2'>
        <button className='text-gray-500 hover:text-gray-700'>
          <Paperclip size={20} />
        </button>
        <button className='text-gray-500 hover:text-gray-700'>
          <Mic size={20} />
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={comment}
        onChange={handleInputChange}
        className='flex-1 border-none resize-none focus:ring-0 focus:outline-none bg-transparent overflow-hidden'
        placeholder='Add your comment...'
        rows={1}
      />
      <button className='bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600'>
        Yuborish
      </button>
    </div>
  );
};

export default SendMessages;

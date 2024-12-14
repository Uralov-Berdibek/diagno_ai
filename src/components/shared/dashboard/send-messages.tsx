'use client';

import React, { useState, useRef } from 'react';
import { Paperclip, Mic, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface SendMessagesProps {
  onSend: (content: string, type: 'text' | 'file' | 'voice') => void;
}

const SendMessages: React.FC<SendMessagesProps> = ({ onSend }) => {
  const [comment, setComment] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSendClick = () => {
    if (comment.trim()) {
      onSend(comment, 'text');
      setComment('');
    }
  };

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        onSend(file.name, 'file');
      } else {
        toast.error('Only PDF files are allowed.');
      }
      e.target.value = '';
    }
  };

  const handleVoiceMessage = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        onSend(audioUrl, 'voice');
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
      }, 5000);
    } catch (error) {
      alert('Unable to access microphone. Please ensure permissions are granted.');
    }
  };

  return (
    <div className='flex items-center space-x-2 border border-gray-300 rounded-lg p-2 my-8 ml-4'>
      <div className='flex items-center gap-2'>
        <button className='text-gray-500 hover:text-gray-700' onClick={handleFileUploadClick}>
          <Paperclip size={20} />
        </button>
        <input ref={fileInputRef} type='file' className='hidden' onChange={handleFileChange} />
        <button className='text-gray-500 hover:text-gray-700' onClick={handleVoiceMessage}>
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
      <button
        onClick={handleSendClick}
        className='bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600'
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default SendMessages;

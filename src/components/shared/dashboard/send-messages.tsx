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
  const [isRecording, setIsRecording] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const animationFrameRef = useRef<number | null>(null);

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

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;

      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const updateAudioLevel = () => {
        analyser.getByteFrequencyData(dataArray);
        const avg = dataArray.reduce((a, b) => a + b, 0) / bufferLength;
        setAudioLevel(avg);
        animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
      };

      audioChunksRef.current = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        cancelAnimationFrame(animationFrameRef.current!);
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        onSend(audioUrl, 'voice');
        setIsRecording(false);
        setAudioLevel(0);
        stream.getTracks().forEach((track) => track.stop());
      };

      setIsRecording(true);
      updateAudioLevel();
      mediaRecorder.start();
    } catch (error) {
      toast.error('Unable to access microphone. Please ensure permissions are granted.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div className='flex items-center space-x-2 border border-gray-300 rounded-lg p-2 my-8 ml-4'>
      <div className='flex items-center gap-2'>
        <button className='text-gray-500 hover:text-gray-700' onClick={handleFileUploadClick}>
          <Paperclip size={20} />
        </button>
        <input ref={fileInputRef} type='file' className='hidden' onChange={handleFileChange} />

        {/* Mic Button with Visual Recording Indicator */}
        <button
          className={`relative text-gray-500 hover:text-gray-700 ${
            isRecording ? 'text-red-500' : ''
          }`}
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          onMouseLeave={stopRecording}
        >
          <Mic size={20} />
          {isRecording && (
            <div className='absolute bottom-0 left-0 w-full h-1 bg-red-500 animate-pulse'></div>
          )}
        </button>
      </div>

      {/* Visual Sound Level Indicator */}
      {isRecording && (
        <div className='w-1/2 h-3 bg-gray-200 rounded-full overflow-hidden'>
          <div
            className='h-full bg-blue-500 transition-all duration-75'
            style={{ width: `${Math.min(audioLevel, 100)}%` }}
          ></div>
        </div>
      )}

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

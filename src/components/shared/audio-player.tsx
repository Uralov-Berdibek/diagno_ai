import React, { useState, useRef, useEffect } from 'react';
import { PlayCircle, PauseCircle, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  src: string; // Audio source URL
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Toggle play/pause
  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress bar as audio plays
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress);
    }
  };

  // Seek audio when user clicks on progress bar
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const audio = audioRef.current;
    if (audio) {
      const clickPosition = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
      audio.currentTime = clickPosition * audio.duration;
      setProgress(clickPosition * 100);
    }
  };

  // Reset play state when audio ends
  const handleAudioEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className='flex items-center space-x-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-700'>
      {/* Play/Pause Button */}
      <button onClick={togglePlay} className='text-blue-600 dark:text-blue-400'>
        {isPlaying ? <PauseCircle size={30} /> : <PlayCircle size={30} />}
      </button>

      {/* Progress Bar */}
      <div
        className='relative w-full h-2 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-600'
        onClick={handleProgressClick}
      >
        <div
          className='absolute h-full bg-blue-500 rounded-full'
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Volume Icon */}
      <Volume2 size={20} className='text-gray-500 dark:text-gray-400' />

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} onEnded={handleAudioEnded} />
    </div>
  );
};

export default AudioPlayer;

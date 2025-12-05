import { useRef, useCallback } from 'react';

const useSound = (soundFile) => {
  const audioRef = useRef(null);

  const play = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(soundFile);
    }
    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0.3; // 30% volume
    audioRef.current.play().catch(err => console.log('Audio play failed:', err));
  }, [soundFile]);

  return play;
};

export default useSound;

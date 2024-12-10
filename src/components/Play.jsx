import { Pause, PlayCircle, PlayPause } from '@phosphor-icons/react'
import React from 'react'
import Lagu from "../assets/lagu.mp3"
import { useEffect } from 'react';

const Play = ({ isPlay, setIsPlay }) => {
    // Inisialisasi audio file (URL atau path lokal)
    const audio = new Audio(Lagu);
  
    // Gunakan `useEffect` untuk mengontrol audio saat `isPlay` berubah
    useEffect(() => {
      if (isPlay) {
        audio.play();
      } else {
        audio.pause();
      }
  
      // Hentikan audio saat komponen tidak aktif
      return () => {
        audio.pause();
      };
    }, [isPlay]);
  
    const handleClick = (e) => {
      e.preventDefault();
      setIsPlay((prev) => !prev);
    };
  
    return (
      <div className="fixed bottom-4 right-4 z-10">
        <button onClick={handleClick} className="bg-white rounded-full p-2">
          {isPlay ? <Pause size={30} /> : <PlayCircle size={30} />}
        </button>
      </div>
    );
  };
  
  export default Play;
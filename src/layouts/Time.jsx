import Header from '../components/Header'
import { CalendarHeart } from '@phosphor-icons/react'
import InfoWaktu from '../components/InfoWaktu'
import Place from './Place'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Time = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Durasi animasi
        offset: 150,    // Jarak untuk memicu animasi
        once: true,     // Animasi hanya terjadi sekali
    });
}, []);
  return (
    <div className='w-full relative lg:p-0 p-6'>
        <Header text="Insya Allah Acara Akan Dilaksanakan Pada :" />
        <div className='mx-auto w-full flex justify-center text-white'>
          <CalendarHeart size={74} />
        </div>
        <div className='w-full mx-auto gap-5 flex lg:flex-row flex-col justify-center'>
          <div className='lg: w-2/3w-full' data-aos="fade-left">
            <InfoWaktu title=" Walimatul 'Urs" date="Ahad, 22 Desember 2024" time="Pukul : 14.00 WIB"  />
          </div>
          {/* <div className='w-full' data-aos="fade-right">
            <InfoWaktu title="Resepsi" date="Senin, 21 Oktober 2024" time="Pukul : 09.00 WIB"  />
          </div> */}
        </div>
        <div className='w-2/3 mx-auto gap-5 flex'>
            <Place />
        </div>

    </div>
  )
}

export default Time
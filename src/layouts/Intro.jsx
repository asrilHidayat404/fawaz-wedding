import { EnvelopeOpen } from '@phosphor-icons/react';
import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import hero from "../assets/hero.jpg"
import mempelai from "../assets/mempelai.jpg"

const Intro = ({ isOpened, handleOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Periksa apakah query string `nama` sudah ada
    if (!searchParams.get("to")) {
      setSearchParams({to: ""});
    }
  }, [searchParams, setSearchParams]);


  return (
    <div 
      className={`w-screen h-screen justify-center items-center z-30 flex ${isOpened ? '-translate-y-0' : 'transform -translate-y-[80rem] transition-transform duration-1000 ease-linear'} fixed`}
      // style={{
      //   backgroundImage: `url(${hero})`,
      //   backgroundSize: "cover",
      //   filter: "blur(10px)"
      // }}
      >
        <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(50%)", // Apply blur to background image
          // backgroundColor: "rgba(0, 0, 0, 1)"
        }}
      ></div>
      <div className='lg:w-1/2 h-full text-white flex justify-center gap-5 text-center items-center flex-col'>
        <div className='max-w-40 w-40 h-40 max-h-40 rounded-full overflow-hidden'>
          <img src={mempelai} alt="mempelai" />
        </div>
        <div>
          <h1 className='text-white lobster-two-regular text-[1.6rem] text-light lg:text-5xl'>Ahmad Fawaz S.pd</h1>
          <h1 className='text-white text-light lobster-two-regular text-[1.3rem] lg:text-5xl'>&</h1>
          <h1 className='text-white lobster-two-regular text-[1.6rem] text-light lg:text-5xl'>Febriana Dia Ruhaini</h1>
        </div>
        <p className='text-1xl'>Kepada Yth. Bapak/Ibu/Saudara/i {searchParams.get("to")}</p>
        <p className='text-1xl'>Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.</p>
        <div className='flex py-2 px-3 text-optional bg-primary rounded-full font-semibold gap-2 hover:bg-optional hover:text-primary transition-colors duration-200 ease-linear'>
          <EnvelopeOpen size={32} />
          <button onClick={handleOpen} className=''>Buka Undangan</button>
        </div>
        <p>Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
      </div>
    </div>
  );
}

export default Intro;

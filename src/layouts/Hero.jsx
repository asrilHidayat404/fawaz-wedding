import React from 'react'
import CountdownTimer from '../utils/CountDownTimer'
import hero from "../assets/hero.jpg"
import mempelai from "../assets/mempelai.jpg"

const Hero = () => {
  return (
    <div
      className="relative max-w-screen min-h-screen flex justify-center items-center hero"
    >
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6 // Hanya opacity untuk gambar latar
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 w-1/2 h-full text-secondary flex flex-col justify-center gap-5 text-center items-center">
        <div className="text-2xl">
          <h1>You Are Invited To</h1>
          <h1>The Wedding Of</h1>
        </div>
        <div className="max-w-40 w-40 h-40 max-h-40 rounded-full overflow-hidden">
          <img src={mempelai} alt="mempelai" />
        </div>
        <div>
          <h1 className="text-primary font-bold lobster-two-regular lg:text-5xl text-xl">Ahmad Fawaz S.pd</h1>
          <p className="text-primary lobster-two-regular lg:text-5xl text-[1rem]">&</p>
          <h1 className="text-primary font-bold lobster-two-regular lg:text-5xl text-xl">Febriana Dia Ruhaini</h1>
        </div>
        <p className="font-bold text-secondary">Ahad, 22 Desember 2024</p>
        <CountdownTimer deadline={"December, 22, 2024"} specificHour={14} />
      </div>
    </div>
  )
}

export default Hero;

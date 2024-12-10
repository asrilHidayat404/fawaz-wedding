import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mempelai from '../components/Mempelai';
import Time from './Time';
import Header from '../components/Header';
import infobg from "../assets/infobg.avif";
import bride from "../assets/bride.webp"


const Information = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi
            offset: 150,    // Jarak untuk memicu animasi
            once: true,     // Animasi hanya terjadi sekali
        });
    }, []);

    return (
        <div className='w-full relative information'>
            {/* Overlay Gelap */}
            <div 
                className='absolute inset-0 bg-black opacity-50' 
                style={{ zIndex: "-1" }}
            ></div>
            
            {/* Gambar Background */}
            <div 
                className='w-full h-full' 
                style={{
                    backgroundImage: `url(${infobg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: 'relative',
                    zIndex: "0",
                }}
            >
                <svg 
                    className='absolute top-0 right-0 left-0' 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1440 320">
                    <path 
                        fill="#eaeaea" 
                        fillOpacity="1" 
                        d="M0,32L60,42.7C120,53,240,75,360,85.3C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                    </path>
                </svg>

                <div data-aos="fade-up">
                    <Header text="Dengan Memohon Rahmat Dan Ridho Dari Allah SWT. Kami Bermaksud Menyelenggarakan Acara Pernikahan Kami" />
                </div>

                <div className='w-full flex lg:flex-row justify-center flex-col'>
                    <div data-aos="fade-right">
                        <Mempelai 
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO4QSaHHqsExJYxXEZTpmuJ-i8LeEVPcnEQ&s" 
                            person="Ahmad Fawaz S.pd" 
                            count='Kedua' 
                            father='Hasani Amien' 
                            mother='Hudaifah' 
                            position="items-end" 
                            wrap={true}
                        />
                    </div>
                    <span 
                        className='lobster-two-regular-italic text-primary lg:mt-24 text-center text-3xl' 
                        data-aos="zoom-in"
                    >
                        &
                    </span>
                    <div data-aos="fade-left">
                        <Mempelai 
                            img={bride} 
                            person="Febriana Dia Ruhaini" 
                            count='Keempat' 
                            father='Abd Kifli' 
                            mother='Amsawiya' 
                            position="items-start" 
                            wrap={false}
                        />
                    </div>
                </div>

                <div data-aos="fade-up">
                    <Time />
                </div>
            </div>
        </div>
    );
};

export default Information;

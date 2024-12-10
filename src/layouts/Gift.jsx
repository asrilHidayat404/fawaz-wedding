import { Gift } from '@phosphor-icons/react'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const GiftSec = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi
            offset: 150,    // Jarak untuk memicu animasi
            once: true,     // Animasi hanya terjadi sekali
        });
    }, []);
    return (
        <div className="w-full bg-optional text-secondary pb-80 gift relative">
            <header className='text-center lg:p-20 pt-20 pb-8 '>
                <h1 className='w-1/2 mx-auto text-4xl great-vibes-regular'>Wedding Gift</h1>
            </header>
            <p className='lg:w-1/2 p-5 lg:p-0 mx-auto text-center font-semibold text-[1.1rem]'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
                Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
            <div className='w-2/3 flex lg:flex-row flex-col gap-3 mx-auto mt-20 text-optional'>
                <div className="flex-1 flex flex-col justify-center items-center rounded-xl p-4 bg-primary font-semibold gap-2 border-4" data-aos="zoom-in">
                    <img src="https://kumengundangmu1.my.id/wp-content/uploads/2024/07/pay-dana.png" alt="" />
                    <p>transfer ke DANA a.n Ahmad Fawaz S.pd</p>
                    <p>085259176485</p>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center rounded-xl p-4 bg-primary font-semibold gap-2 border-4" data-aos="zoom-in">
                    <Gift size={96} color='#eaeaea' />
                    <p>Anda Juga Bisa Mengirim Kado Fisik Ke Alamat Berikut:</p>
                    <p>Palongan Kapedi, Dusun Aeng Bato RT 005/ RW 006 Kapedi Bluto Sumenep</p>
                </div>
            </div>
        </div>
    )
}

export default GiftSec
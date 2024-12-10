import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    const randomImages = [];
    const [imgOn, setImgOn] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [i , setI] = useState()
    const showImage = (data) => {
        data.preventDefault()
        setImgOn((prev) => !prev)
        setImgUrl(data.target.src)
    }
    useEffect(() => {
        for (let i = 0; i < 20; i++) {
            setI(Math.random())
        }
    }, [imgUrl])

    useEffect(() => {
        AOS.init({ // Initialization
          duration: 2000
        });
      });
    for (let i = 0; i < 20; i++) {
        randomImages.push(
            <img
                id={i}
                data-aos="flip-left"
                key={i}
                src={`https://picsum.photos/1200/700?random=${i}`}
                alt=""
                className="rounded-md cursor-pointer"
                onClick={(e) => showImage(e)}
            />
        );
    }
    return (
        <div className='w-full p-10 bg-primary'>
            <h1 className='text-center text-5xl great-vibes-regular text-white'>Gallery</h1>
            <Header text="Memori Kisah Kami" />
            <div className="photos w-full grid lg:grid-cols-4 grid-cols-3 lg:gap-10 gap-5 justify-center p-0">
                {
                    randomImages
                }
            </div>
            <div className={`fixed flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-nav-black-rgba ${imgOn ? "flex" : "hidden"}`}>
                <div className='max-w-[90%] max-h-[90%] lg:max-w-[70%] lg:max-h-[70%] relative flex justify-center items-center'>
                    <span className="absolute lg:-top-5 md:-top-5 -top-4 text-2xl -right-4 w-[30px] h-[30px] p-0 rounded-full flex justify-center font-bold uppercase items-center z-1 text-primary bg-slate-200 cursor-pointer" onClick={() => setImgOn(!imgOn)}>x</span>
                    <img src={imgUrl} alt="" className=' border-primary border-2 lg:w-[800px]'/>
                </div>
            </div>
        </div>

    )
}

export default Gallery

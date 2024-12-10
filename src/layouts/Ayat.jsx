import React, { useEffect, useState, useRef } from 'react';

const Ayat = () => {
  const [isVisible, setIsVisible] = useState(false); // Status untuk memulai efek ketik
  const [displayedText, setDisplayedText] = useState(''); // Teks yang ditampilkan
  const ayatRef = useRef(null); // Ref untuk elemen Ayat

  const fullText = `“Dan Diantara Tanda-tanda (Kebesaran) -Nya Ialah Dia Menciptakan Pasangan-pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Diantaramu Rasa Kasih Dan Sayang. Sungguh, Pada Yang Demikian Itu Benar-benar Terdapat Tanda-tanda (Kebesaran Allah) Bagi Kaum Yang Berfikir”`;

  // Fungsi untuk memulai efek ketik
  const typeText = (text, index = 0) => {
    if (index < text.length) {
      setDisplayedText((prev) => prev + text.charAt(index));
      setTimeout(() => typeText(text, index + 1), 100); // Setiap karakter muncul dalam 100ms
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Mulai efek ketik ketika elemen terlihat
          }
        });
      },
      { threshold: 0.5 } // Trigger ketika 50% elemen terlihat
    );

    if (ayatRef.current) {
      observer.observe(ayatRef.current);
    }

    return () => {
      if (ayatRef.current) {
        observer.unobserve(ayatRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      typeText(fullText); // Mulai efek ketik setelah elemen terlihat
    }
  }, [isVisible]);

  return (
    <div className='text-center w-full flex justify-center'>
      <div className='w-full pt-56 pb-44 bg-optional relative'>
        <p
          ref={ayatRef}
          className='w-2/3 mx-auto lg:text-xl roboto-slab'
        >
          {displayedText}
        </p>
      </div>
    </div>
  );
};

export default Ayat;

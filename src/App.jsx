import './App.css'
import Hero from './layouts/Hero'
import Intro from './layouts/Intro'
import Ayat from './layouts/Ayat'
import Information from './layouts/Information'
import { useState } from 'react'
import { useEffect } from 'react'
import Gift from './layouts/Gift'
import Confirmation from './layouts/Confirmation'
import CommentSection from './layouts/CommentSection'
import Gallery from './layouts/Gallery'
import Play from './components/Play'
import Footer from './components/Footer'

function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault()
    setIsOpened(prev => !prev)
    if (isOpened) {
      setIsPlay(true)
    }
  }
  useEffect(() => {
    // Mencegah scroll pada body
    if (isOpened) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpened) {
      document.body.style.overflow = "auto";
    }


  }, [isOpened]);
  return (
    <div className='relative'>
      <Intro  isOpened={isOpened} handleOpen={handleOpen}/>
      <Play isPlay={isPlay} setIsPlay={setIsPlay} />
      <Hero />
      <Ayat />
      <Information />
      <Gift />
      <Confirmation />
      <CommentSection />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App

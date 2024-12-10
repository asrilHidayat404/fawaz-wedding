import React from 'react'

const Place = () => {
    return (
        <div className='w-full py-40 space-y-5 flex flex-col justify-center items-center'>
            <h1 className='text-white text-center mx-auto text-[1.6rem] lg:text-3xl'>Bertempat di:</h1>
            <h1 className='text-white text-center lg:w-3/4 mx-auto lg:text-2xl'>Kenthang Laok Kapedi</h1>
            <div className='w-96 h-96 border border-white flex justify-center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8109099.377460804!2d113.6752618!3d-7.0654055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sar!4v1730045865920!5m2!1sid!2sar" className='w-full h-full' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Place
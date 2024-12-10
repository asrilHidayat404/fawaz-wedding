import React from 'react'

const Mempelai = ({ img, person, count, father, mother, position, wrap }) => {
    return (
        <div className={`slide-in-left flex-1 flex flex-col justify-center ${position} p-4`}>
            <div className={`flex lg:flex-col justify-center items-center gap-5 ${wrap ? "flex-row-reverse" : ""}`}>
                <div className='max-w-40 w-32 h-32 max-h-40 rounded-full overflow-hidden'>
                    <img src={img} alt="mempelai" />
                </div>
                <div>
                    <h1 className='text-white lobster-two-regular text-xl text-light'>{person}</h1>
                    <div className='w-3/3'>
                        <p className='text-center text-sm text-white font-semibold'>Anak {count} dari : </p>
                        <p className='text-center text-sm text-white font-semibold'>Bapak {father}</p>
                        <p className='text-center text-sm text-white font-semibold'>& Ibu {mother}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mempelai
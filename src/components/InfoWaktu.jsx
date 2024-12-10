import { Calendar, Clock } from '@phosphor-icons/react'
import React from 'react'

const InfoWaktu = ({title, time, date}) => {
    return (
        <div className="flex-1 space-y-7 bg-opacity-70 shadow-white shadow-md bg-secondary py-4 px-5 rounded-md text-white">
            <header>
                <h1 className='dancing-script text-center text-3xl'>{title}</h1>
            </header>
            <div className='text-center flex justify-center flex-col items-center gap-4'>
                <div className="flex gap-2 text-lg">
                    <Calendar size={24} />
                    <p className="date">{date}</p>
                </div>
                <div className="flex gap-2 text-lg">
                    <Clock size={24} />
                    <p className="date">{time}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoWaktu
import React from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Confirmation = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [attendance, setAttendance] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSendMessage = () => {
        const whatsappMessage = `Nama: ${name}%0APesan: ${message}%0AKonfirmasi: ${attendance}`;
        window.open(`https://wa.me/6285235012079?text=${whatsappMessage}`, "_blank");
    };

    return (
        <div className='w-full bg-primary p-5 py-28'>
            <div className="lg:w-2/3 mx-auto bg-secondary lg:p-20 p-10 border-4 rounded-xl space-y-4">
                <h1 className='text-center text-optional text-3xl great-vibes-regular'>Konfirmasi Kehadiran</h1>
                <input
                    type="text"
                    placeholder="Isikan Nama Lengkap"
                    className="w-full p-3 mb-4 rounded-md border border-gray-300 focus:outline-none"
                    value={searchParams.get("to")}
                    onChange={(e) => setName(e.target.value)}
                />

                <textarea
                    placeholder="Tuliskan Pesan dan Doa Restu ya"
                    className="w-full p-3 mb-4 rounded-md border border-gray-300 focus:outline-none h-24"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <div className="text-left text-white font-medium mb-4">Konfirmasi</div>
                <div className="flex flex-col items-start space-y-2 text-white font-medium">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="attendance"
                            value="Iya, Saya akan Datang"
                            onChange={(e) => setAttendance(e.target.value)}
                            className="form-radio text-white"
                        />
                        <span className="ml-2">Iya, Saya akan Datang</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="attendance"
                            value="Maaf, Saya Tidak Bisa Datang"
                            onChange={(e) => setAttendance(e.target.value)}
                            className="form-radio text-white"
                        />
                        <span className="ml-2">Maaf, Saya Tidak Bisa Datang</span>
                    </label>
                </div>

                <button
                    onClick={handleSendMessage}
                    className="mt-6 px-6 py-3 bg-primary text-optional rounded-lg font-semibold hover:bg-optional hover:text-primary transition duration-300"
                >
                    Kirim ke WA Mempelai
                </button>
            </div>
        </div>
    )
}

export default Confirmation
import React, { useState } from 'react';
import { 
    FaUserCircle, 
    FaEnvelope, 
    FaCalendarAlt, 
    FaEdit, 
    FaCamera,
    FaTachometerAlt,
    FaCube 
} from 'react-icons/fa';

const Profile = () => {
    // Profil ma'lumotlari (namuna)
    const [userProfile] = useState({
        name: 'Jane Doe',
        email: 'janedoe@admin.com',
        joinDate: '2023-08-15',
        role: 'Administrator',
        projectsCompleted: 12,
        tasksPending: 3,
        imageUrl: null, // Haqiqiy rasm URL bu yerda bo'lishi mumkin
    });
    
    // Asosiy fon va konteyner stilini qo'llash
    return (
        <div className="min-h-screen bg-gray-900 p-8 text-white">
            <h1 className="text-4xl font-extrabold mb-8 border-b border-gray-800 pb-4">
                Mening Profilim
            </h1>
            
            {/* Asosiy Profil Bloki */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* 1. Chap ustun: Profil Surat va Asosiy Ma'lumotlar */}
                <div className="lg:col-span-1 bg-gray-800 p-8 rounded-xl shadow-2xl h-min border border-gray-700">
                    
                    {/* Profil Rasmi Bo'limi */}
                    <div className="flex flex-col items-center mb-6 relative">
                        {userProfile.imageUrl ? (
                            <img 
                                src={userProfile.imageUrl} 
                                alt="Profil Rasmi" 
                                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
                            />
                        ) : (
                            <FaUserCircle className="w-32 h-32 text-gray-500 rounded-full border-4 border-gray-700" />
                        )}
                        
                        {/* Rasm yuklash tugmasi */}
                        <button className="absolute bottom-0 right-[35%] p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition">
                            <FaCamera className='w-4 h-4' />
                        </button>
                    </div>

                    {/* Asosiy ma'lumotlar */}
                    <h2 className="text-3xl font-bold text-center text-white mt-4">{userProfile.name}</h2>
                    <p className="text-sm text-center text-gray-400 mb-6">{userProfile.role}</p>

                    <div className="space-y-3 border-t border-gray-700 pt-4">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="w-5 h-5 text-indigo-400" />
                            <span className="text-gray-300">{userProfile.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCalendarAlt className="w-5 h-5 text-indigo-400" />
                            <span className="text-gray-300">A'zolik: {userProfile.joinDate}</span>
                        </div>
                        <button className='w-full mt-4 flex items-center justify-center gap-2 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition'>
                            <FaEdit className='w-4 h-4'/>
                            Profilni tahrirlash
                        </button>
                    </div>
                </div>

                {/* 2. O'ng ustun: Statistika va Qo'shimcha Ma'lumotlar */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Statistik Kartochkalar */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        {/* Yakunlangan Loyihalar */}
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-400">Yakunlangan Loyihalar</p>
                                <p className="text-4xl font-extrabold text-indigo-500 mt-1">{userProfile.projectsCompleted}</p>
                            </div>
                            <FaTachometerAlt className='w-10 h-10 text-gray-700'/>
                        </div>
                        
                        {/* Kutilayotgan Vazifalar */}
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-400">Kutilayotgan Vazifalar</p>
                                <p className="text-4xl font-extrabold text-yellow-500 mt-1">{userProfile.tasksPending}</p>
                            </div>
                            <FaCube className='w-10 h-10 text-gray-700'/>
                        </div>
                    </div>
                    
                    {/* Qisqacha Tarjimai Hol/Maqsad */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                        <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Qisqacha Ma'lumot</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Men Admin Panelning boshqaruvchisi sifatida tizim samaradorligini ta'minlash va foydalanuvchilar tajribasini optimallashtirishga mas'ulman. Yangi funksiyalarni joriy qilish va xavfsizlik choralarini nazorat qilish ustida ishlayman.
                        </p>
                    </div>

                    {/* So'nggi Aktivlik (Namuna) */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                        <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">So'nggi Aktivlik</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400">
                                <span className='text-green-400'>[10:30]</span> Mahsulotlar sahifasini tahrirladi.
                            </li>
                            <li className="text-gray-400">
                                <span className='text-red-400'>[09:45]</span> Bir foydalanuvchini blokladi.
                            </li>
                            <li className="text-gray-400">
                                <span className='text-indigo-400'>[08:00]</span> Tizimga kirdi.
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Profile;
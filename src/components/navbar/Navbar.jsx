import React from 'react';
// React Icons'larni import qilish
import { 
    FaSearch, 
    FaBell, 
    FaUserCircle, 
    FaBars // Mobil menyu tugmasi
} from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => { // Agar sidebar bo'lsa, uni boshqarish uchun prop qo'shildi
    
    // Navbar'ning zamonaviy, qora/kulrang stillari
    return (
        // Konteyner: Qora fon, yumshoq soya, yuqorida qotirilgan (fixed)
        <header className="sticky top-0 z-20 bg-gray-900 shadow-xl border-b border-gray-800">
            <div className="flex justify-between items-center h-16 px-6">
                
                {/* 1. Chap tomon: Mobil menyu tugmasi va Brand nomi (agar sidebar yashirin bo'lsa) */}
                <div className="flex items-center space-x-4">
                    {/* Mobil/Sidebar Toggle tugmasi */}
                    <button 
                        onClick={toggleSidebar} 
                        className="text-gray-400 hover:text-white lg:hidden transition duration-150"
                        aria-label="Toggle Sidebar"
                    >
                        <FaBars className='w-6 h-6' />
                    </button>
                    
                    {/* Admin Panel nomi (kattaroq ekranlarda) */}
                    <span className="text-xl font-semibold text-white hidden sm:block">
                        Dashboard
                    </span>
                </div>


                {/* 2. Markaz: Qidiruv maydoni */}
                <div className="relative flex-grow max-w-md mx-4 hidden md:block">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Qidiruv..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    />
                </div>

                
                {/* 3. O'ng tomon: Ikonkalar va Profil */}
                <div className="flex items-center space-x-4">
                    
                    {/* Qidiruv (kichik ekranlar uchun) */}
                    <button className="text-gray-400 hover:text-white md:hidden transition duration-150" aria-label="Search">
                        <FaSearch className='w-5 h-5' />
                    </button>

                    {/* Notification/Bildirishnoma Ikonkasi */}
                    <button className="text-gray-400 hover:text-white relative transition duration-150" aria-label="Notifications">
                        <FaBell className='w-5 h-5' />
                        {/* Notification Dot (agar bildirishnoma bo'lsa) */}
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-gray-900 bg-red-500"></span>
                    </button>

                    {/* Profil Ikonkasi */}
                    <button className="flex items-center text-gray-400 hover:text-white transition duration-150">
                        <FaUserCircle className='w-8 h-8 text-indigo-500' />
                        {/* Foydalanuvchi nomi (ixtiyoriy) */}
                        <span className='hidden sm:block ml-2 text-sm font-medium'>Admin</span>
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Navbar;
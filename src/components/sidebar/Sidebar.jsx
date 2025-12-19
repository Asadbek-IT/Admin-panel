import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
// React Icons'larni import qilish
import { 
    FaTachometerAlt, 
    FaCube, 
    FaUsers, 
    FaUserCircle, 
    FaCog, 
    FaSignOutAlt,
    FaRegBuilding // Logo uchun
} from 'react-icons/fa';

// Custom Snackbar funksiyasini import qilish
// Yo'lni loyihangiz tuzilishiga qarab to'g'rilang

const Sidebar = () => {
    const navigate = useNavigate();

    // LogOut funksiyasini custom snackbar bilan yangilash
    const LogOut = () => {
        // Tokenni o'chirish
        localStorage.removeItem("token");
        
        // Custom Snackbar yordamida xabarnoma berish
        // 'info' turini custom snackbar qo'llab-quvvatlamagani uchun 'success' yoki 'custom' ishlatiladi.
        // Bu yerda 'success' ishlatamiz.
        showSnackbar('Tizimdan muvaffaqiyatli chiqdingiz!', 'success', 3000); 

        // Kirish sahifasiga yo'naltirish
        navigate("/login");
    }

    // Navigatsiya elementlari ma'lumotlar tuzilmasi
    const navItems = [
        { path: "/dashboard/dashboard-main", name: "Dashboard", icon: FaTachometerAlt },
        { path: "/dashboard/products", name: "Products", icon: FaCube },
        { path: "/dashboard/users", name: "Users", icon: FaUsers },
        { path: "/dashboard/profile", name: "Profile", icon: FaUserCircle },
        { path: "/dashboard/settings", name: "Settings", icon: FaCog },
    ];

    return (
        // Sidebar konteyneri: Qattiq kenglik, vertikal joylashuv, to'q fon
        <div className='w-60 h-100vh bg-gray-900 flex flex-col shadow-2xl border-r border-gray-800'>
            
            {/* Logo yoki Sarlavha */}
            <div className='p-6 border-b border-gray-800 flex items-center gap-2'>
                <FaRegBuilding className='w-6 h-6 text-indigo-500' />
                <h1 className='text-xl font-bold text-white'>Admin Panel</h1>
            </div>

            {/* Navigatsiya ro'yxati */}
            <ul className='flex-grow p-4 space-y-1'>
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink 
                            to={item.path}
                            // NavLink stil funktsiyasi
                            className={({ isActive }) => 
                                `flex items-center gap-3 p-3 rounded-lg font-medium transition-colors duration-200 
                                ${isActive 
                                    ? 'bg-indigo-600 text-white shadow-md' // Active holat
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white' // Normal holat
                                }`
                            }
                        >
                            <item.icon className='w-5 h-5' />
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Log Out Bo'limi */}
            <div className='p-4 border-t border-gray-800'>
                <p 
                    onClick={LogOut} 
                    className='flex items-center gap-3 p-3 rounded-lg font-medium text-red-400 cursor-pointer 
                               hover:bg-gray-800 hover:text-red-500 transition-colors duration-200 select-none'
                >
                    <FaSignOutAlt className='w-5 h-5' />
                    Tizimdan chiqish
                </p>
            </div>
            
        </div>
    )
}

export default Sidebar
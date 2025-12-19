import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa'; 
import { useSnackbar } from '../components/ui/useSnackbar';
import Snackbar from '../components/ui/Snackbar';
// Yangi custom hook va komponentlarni import qilish

const LoginPage = () => {
    const Api = `https://fakestoreapi.com/auth/login`;

    const [username, setUsername] = useState('johnd');
    const [password, setPassword] = useState('m38rmF$');
    const [isLoading, setIsLoading] = useState(false); 
    const navigate = useNavigate();

    // CUSTOM SNACKBAR HOOK'DAN FOYDALANISH
    const { notification, showSnackbar } = useSnackbar();

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        let user = {
            username: username,
            password: password,
        };

        try {
            const response = await axios.post(Api, user);
            const token = response.data.token;

            localStorage.setItem('token', token);
            
            // CUSTOM SNACKBAR YORDAMIDA MUVAFFDAQIYAT XABARINI KO'RSATISH
            showSnackbar('Muvaffaqiyatli kirish! Dashboardga yo\'naltirilmoqda...', 'success', 3000);

            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);

        } catch (error) {
            // CUSTOM SNACKBAR YORDAMIDA XATO XABARINI KO'RSATISH
            const errorMessage = 'Kirishda xatolik yuz berdi. Iltimos, ma\'lumotlarni tekshiring.';
            showSnackbar(errorMessage, 'error', 5000); // Xatolik xabari biroz uzoqroq qolsin
            console.error("Login error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-950 p-4'>
            
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-sm bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-7 border border-gray-800"
            >

                <div className="text-center">
                    <FaSignInAlt className='w-10 h-10 mx-auto text-indigo-500 mb-2' />
                    <h1 className='text-3xl font-bold text-white tracking-wide'>
                        Tizimga Kirish
                    </h1>
                    <p className='text-gray-400 text-sm mt-1'>
                        Foydalanuvchi nomingiz va parolingizni kiriting
                    </p>
                </div>

                {/* Username Input Guruh */}
                <div className='space-y-2'>
                    <label htmlFor="username" className='text-sm font-medium text-gray-300 block'>
                        Foydalanuvchi nomi
                    </label>
                    <div className='relative'>
                        <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
                        <input 
                            id="username"
                            onChange={handleUsername} 
                            required 
                            type="text" 
                            name='username' 
                            placeholder='johnd' 
                            value={username} 
                            disabled={isLoading}
                            className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        />
                    </div>
                </div>

                {/* Password Input Guruh */}
                <div className='space-y-2'>
                    <label htmlFor="password" className='text-sm font-medium text-gray-300 block'>
                        Parol
                    </label>
                    <div className='relative'>
                        <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
                        <input 
                            id="password"
                            onChange={handlePassword} 
                            required 
                            type="password" 
                            name='password' 
                            placeholder='********' 
                            value={password} 
                            disabled={isLoading}
                            className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        />
                    </div>
                </div>

                {/* Kirish Tugmasi */}
                <button 
                    type='submit' 
                    disabled={isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-200 ease-in-out shadow-lg shadow-indigo-500/30 transform active:scale-95 disabled:bg-gray-700 disabled:shadow-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Kirilmoqda...
                        </>
                    ) : (
                        'Kirish'
                    )}
                </button>

            </form>

            {/* Snackbar komponentini shu yerda chaqiramiz */}
            <Snackbar notification={notification} />
        </div> 
    );
}

export default LoginPage;
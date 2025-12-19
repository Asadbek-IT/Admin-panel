import React, { useState } from 'react';
import { 
    FaUserEdit, 
    FaLock, 
    FaPalette, 
    FaSave, 
    FaCheckCircle 
} from 'react-icons/fa';

// Custom Snackbar funksiyasini import qilish (oldingi misollaringizdan)
// Yo'lni loyihangiz tuzilishiga qarab to'g'rilang

const Settings = () => {
    // Navigatsiya uchun sozlama bo'limi holati
    const [activeTab, setActiveTab] = useState('profile');
    const [isSaving, setIsSaving] = useState(false);

    // Namunaviy ma'lumotlar holati
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
    });
    const [password, setPassword] = useState({
        current: '',
        new: '',
        confirm: '',
    });

    // Saqlash funksiyasi
    const handleSave = (e) => {
        e.preventDefault();
        setIsSaving(true);
        
        // Bu yerda API chaqiruvi bo'lishi kerak

        setTimeout(() => {
            setIsSaving(false);
            showSnackbar(`${activeTab} sozlamalari saqlandi!`, 'success', 3000);
        }, 1500);
    };
    
    // --- 1. Profil Sozlamalari Komponenti ---
    const ProfileSettings = () => (
        <form onSubmit={handleSave} className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 block">Ism</label>
                <input 
                    type="text" 
                    value={profile.name} 
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                    disabled={isSaving}
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 block">Elektron pochta</label>
                <input 
                    type="email" 
                    value={profile.email} 
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                    disabled={isSaving}
                />
            </div>
            <SaveButton isSaving={isSaving} />
        </form>
    );

    // --- 2. Xavfsizlik Sozlamalari Komponenti ---
    const SecuritySettings = () => (
        <form onSubmit={handleSave} className="space-y-6">
             <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 block">Joriy Parol</label>
                <input 
                    type="password" 
                    value={password.current} 
                    onChange={(e) => setPassword({...password, current: e.target.value})}
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                    disabled={isSaving}
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 block">Yangi Parol</label>
                <input 
                    type="password" 
                    value={password.new} 
                    onChange={(e) => setPassword({...password, new: e.target.value})}
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                    disabled={isSaving}
                />
            </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 block">Parolni Tasdiqlash</label>
                <input 
                    type="password" 
                    value={password.confirm} 
                    onChange={(e) => setPassword({...password, confirm: e.target.value})}
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                    disabled={isSaving}
                />
            </div>
            <SaveButton isSaving={isSaving} />
        </form>
    );

    // --- 3. UI Sozlamalari Komponenti ---
    const UISettings = () => (
        <div className="space-y-6">
            <h3 className='text-lg font-semibold text-white'>Mavzu (Theme)</h3>
            <div className="flex space-x-4">
                {/* Oddiy "Dark" mavzu tanlash */}
                <button className="flex items-center gap-2 p-3 border border-indigo-500 bg-gray-900 rounded-lg text-white">
                    <FaCheckCircle className='text-indigo-500'/>
                    Qora Mavzu
                </button>
                {/* Boshqa mavzu varianti */}
                <button className="flex items-center gap-2 p-3 border border-gray-700 bg-gray-800 rounded-lg text-gray-400 hover:border-gray-600 transition">
                    Yorug' Mavzu
                </button>
            </div>
        </div>
    );
    
    // Tugmani qayta ishlatiladigan komponenti
    const SaveButton = ({ isSaving }) => (
        <button 
            type="submit"
            disabled={isSaving}
            className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 disabled:bg-gray-700 disabled:cursor-not-allowed"
        >
            {isSaving ? (
                <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saqlanmoqda...
                </>
            ) : (
                <>
                    <FaSave className='w-4 h-4'/>
                    Saqlash
                </>
            )}
        </button>
    );

    // --- Sahifani Render Qilish Mantiq'i ---
    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileSettings />;
            case 'security':
                return <SecuritySettings />;
            case 'ui':
                return <UISettings />;
            default:
                return <ProfileSettings />;
        }
    };
    
    // Sidebar navigatsiyasi uchun elementlar
    const tabs = [
        { id: 'profile', name: 'Profil Sozlamalari', icon: FaUserEdit },
        { id: 'security', name: 'Xavfsizlik', icon: FaLock },
        { id: 'ui', name: 'UI Sozlamalari', icon: FaPalette },
    ];


    return (
        // Asosiy fon (Dashboard kontenti)
        <div className="min-h-screen bg-gray-900 p-8 text-white">
            <h1 className="text-4xl font-extrabold mb-8 border-b border-gray-800 pb-4">
                Sozlamalar
            </h1>
            
            {/* Sozlamalar kontenti ikki ustunli gridda */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                {/* Chap ustun: Navigatsiya Menyusi */}
                <aside className="lg:col-span-1 bg-gray-800 p-4 rounded-xl shadow-lg h-min">
                    <nav className="space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors duration-150 
                                            ${activeTab === tab.id 
                                                ? 'bg-indigo-600 text-white font-semibold' 
                                                : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`
                                            }
                            >
                                <tab.icon className='w-5 h-5'/>
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* O'ng ustun: Aktiv Sozlama Komponenti */}
                <main className="lg:col-span-3 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
                    {/* Aktiv Bo'lim Sarlavhasi */}
                    <div className='mb-6 border-b border-gray-700 pb-4'>
                         <h2 className="text-2xl font-bold text-white capitalize">
                            {tabs.find(t => t.id === activeTab)?.name || 'Sozlamalar'}
                        </h2>
                    </div>

                    {/* Kontentni Ko'rsatish */}
                    {renderContent()}
                </main>
                
            </div>
            
        </div>
    );
}

export default Settings;
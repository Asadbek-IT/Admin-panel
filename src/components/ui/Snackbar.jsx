// Snackbar.jsx
import React, { useEffect, useState } from 'react';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

/**
 * Custom Snackbar visual komponenti.
 * @param {object} notification - useSnackbar hookidan kelgan holat ({message, type, visible}).
 */
const Snackbar = ({ notification }) => {
    const { message, type, visible } = notification;

    // Animator class'larini boshqarish uchun ichki holat
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (visible) {
            // Ko'rsatish uchun sekinlik bilan animatsiyani ishga tushirish
            setIsMounted(true);
        } else {
            // Yashirish animatsiyasi tugagandan so'ng dom'dan olib tashlash
            const timer = setTimeout(() => setIsMounted(false), 300); // Tailwind transition duration (300ms) ga mos

            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!isMounted && !visible) return null; // Dom'da ko'rinmasin

    let icon, styleClass;

    // Ikonka va rang stilini aniqlash
    if (type === 'success') {
        icon = <BsCheckCircleFill className="text-green-500 w-6 h-6" />;
        styleClass = "border-l-4 border-green-500";
    } else if (type === 'error') {
        icon = <BsXCircleFill className="text-red-500 w-6 h-6" />;
        styleClass = "border-l-4 border-red-500";
    } else {
        return null;
    }

    // Animatsiya classlari: visible bo'lsa kiradi, bo'lmasa chiqadi (Tailwind'da `transform` ishlatilgan)
    const transitionClass = visible 
        ? 'translate-x-0 opacity-100' // Kirish (bottom-right ga)
        : 'translate-x-[150%] opacity-0'; // Chiqish

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div
                className={`flex items-center p-4 rounded-lg shadow-2xl max-w-xs transition-all duration-300 ease-in-out bg-gray-100 text-gray-900 ${styleClass} ${transitionClass}`}
            >
                <div className="flex-shrink-0 mr-3">
                    {icon}
                </div>
                <p className="font-semibold text-sm">{message}</p>
            </div>
        </div>
    );
};

export default Snackbar;
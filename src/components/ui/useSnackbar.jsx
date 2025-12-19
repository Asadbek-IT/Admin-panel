// useSnackbar.jsx
import { useState, useCallback } from 'react';

// Xabar obyekti uchun interfeys
const initialNotification = {
    message: '',
    type: 'success', // 'success' yoki 'error'
    visible: false,
};

export const useSnackbar = () => {
    const [notification, setNotification] = useState(initialNotification);

    // Xabarni ko'rsatish funksiyasi
    const showSnackbar = useCallback((message, type = 'success', duration = 3000) => {
        setNotification({
            message,
            type,
            visible: true,
        });

        // Avtomatik yashirish
        setTimeout(() => {
            setNotification(prev => ({ ...prev, visible: false }));
        }, duration);

    }, []);

    // Xabarni yopish funksiyasi (agar kerak bo'lsa)
    const hideSnackbar = useCallback(() => {
        setNotification(prev => ({ ...prev, visible: false }));
    }, []);

    return {
        notification,
        showSnackbar,
        hideSnackbar,
    };
};
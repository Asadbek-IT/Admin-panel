// useNotification.jsx
import toast from 'react-hot-toast';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

/**
 * Custom Notification (Snackbar) komponenti.
 * @param {string} message - Ko'rsatiladigan xabar.
 * @param {'success' | 'error'} type - Xabar turi.
 */
const CustomSnackbar = ({ message, type }) => {
    let icon, styleClass;

    if (type === 'success') {
        icon = <BsCheckCircleFill className="text-green-500 w-6 h-6" />;
        // Muvaffaqiyat uchun stil
        styleClass = "bg-white border-l-4 border-green-500 text-gray-800";
    } else {
        icon = <BsXCircleFill className="text-red-500 w-6 h-6" />;
        // Xato uchun stil
        styleClass = "bg-white border-l-4 border-red-500 text-gray-800";
    }

    return (
        <div className={`flex items-center p-4 rounded-lg shadow-xl max-w-xs ${styleClass}`}>
            <div className="flex-shrink-0 mr-3">
                {icon}
            </div>
            <p className="font-semibold text-sm">{message}</p>
        </div>
    );
};

/**
 * Notificationlarni ko'rsatish uchun asosiy funksiya.
 */
export const showNotification = (message, type = 'success') => {
    // Pastki-o'ng tomondan animatsiya bilan chiqishi uchun sozlamalar
    toast.custom((t) => (
        // t.visible yordamida `react-hot-toast` tomonidan boshqariladigan animatsiya class'lari.
        // Tailwind'da `animate-in` va `animate-out` pluginlari o'rnatilgan bo'lishi kerak.
        <div
            className={`${t.visible 
                ? 'animate-in fade-in-0 slide-in-from-bottom-2' 
                : 'animate-out fade-out-0 slide-out-to-bottom-2'
            } transform transition duration-300 ease-in-out`}
        >
            <CustomSnackbar message={message} type={type} />
        </div>
    ), {
        duration: 3000,
        position: 'bottom-right', 
        // Toast'ning o'zining fonini yashiramiz, shunda faqat CustomSnackbar ko'rinadi.
        style: {
            background: 'transparent',
            boxShadow: 'none',
            padding: 0,
        },
    });
};
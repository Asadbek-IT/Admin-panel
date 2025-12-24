import axios from 'axios';
import React, { useState } from 'react';
import { FaTimes, FaPlusCircle } from 'react-icons/fa';

const Modal = ({ setOpenModal }) => {
    const api = `https://fakestoreapi.com/products`;

    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post(api, formData);
            if (request.status === 200 || request.status === 201) {
                alert("Muvaffaqiyatli qo'shildi!");
                setOpenModal(false);
            }
        } catch (error) {
            alert("Xatolik yuz berdi!");
        }
    };

    return (
        // Overlay (задний фон)
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            
            {/* Modal Container */}
            <div className="bg-gray-900 w-full max-w-lg rounded-2xl border border-gray-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/50">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <FaPlusCircle className="text-indigo-500" /> Add New Product
                    </h2>
                    <button 
                        onClick={() => setOpenModal(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-400">Title</label>
                        <input 
                            onChange={handleChange} value={formData.title} name='title' 
                            type="text" placeholder='Product title...'
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-400">Price ($)</label>
                            <input 
                                onChange={handleChange} value={formData.price} name='price' 
                                type="number" placeholder='0.00'
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-400">Category</label>
                            <input 
                                onChange={handleChange} value={formData.category} name='category' 
                                type="text" placeholder='Electronics...'
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-400">Image URL</label>
                        <input 
                            onChange={handleChange} value={formData.image} name='image' 
                            type="url" placeholder='https://example.com/image.jpg'
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-400">Description</label>
                        <textarea 
                            onChange={handleChange} value={formData.description} name="description" 
                            placeholder='Describe the product...' rows="3"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 mt-8 pt-4 border-t border-gray-800">
                        <button 
                            type="button"
                            onClick={() => setOpenModal(false)}
                            className="px-5 py-2.5 rounded-lg font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-all"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="px-6 py-2.5 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                        >
                            Create Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
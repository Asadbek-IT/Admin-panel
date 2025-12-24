import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTimes, FaSync } from 'react-icons/fa';

const Modal2 = ({ updateId, setUpdateModal }) => {
    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
    });

    const [loading, setLoading] = useState(true);

    const handleUpdateChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${updateId}`)
            .then(res => {
                const { title, price, description, category, image } = res.data;
                setFormData({ title, price, description, category, image });
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [updateId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.put(`https://fakestoreapi.com/products/${updateId}`, formData)
            .then(res => {
                console.log("Updated:", res.data);
                alert("Mahsulot muvaffaqiyatli yangilandi!");
                setUpdateModal(false);
            });
    }

    return (
        // Overlay
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            
            {/* Modal Container */}
            <div className="bg-gray-900 w-full max-w-lg rounded-2xl border border-gray-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/50">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <FaEdit className="text-amber-500" /> Update Product
                    </h2>
                    <button 
                        onClick={() => setUpdateModal(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {loading ? (
                    <div className="p-20 flex justify-center items-center">
                        <FaSync className="animate-spin text-amber-500 text-3xl" />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-400">Title</label>
                            <input 
                                onChange={handleUpdateChange} name='title' value={formData.title}
                                type="text" placeholder='Product title'
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-400">Price ($)</label>
                                <input 
                                    onChange={handleUpdateChange} name='price' value={formData.price}
                                    type="number" step="0.01"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-400">Category</label>
                                <input 
                                    onChange={handleUpdateChange} name='category' value={formData.category}
                                    type="text"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-400">Image URL</label>
                            <input 
                                onChange={handleUpdateChange} name='image' value={formData.image}
                                type="url"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-400">Description</label>
                            <textarea 
                                onChange={handleUpdateChange} name="description" value={formData.description}
                                rows="3"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-3 mt-8 pt-4 border-t border-gray-800">
                            <button 
                                type="button"
                                onClick={() => setUpdateModal(false)}
                                className="px-5 py-2.5 rounded-lg font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-all"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                className="px-6 py-2.5 rounded-lg font-medium bg-amber-600 text-white hover:bg-amber-700 shadow-lg shadow-amber-500/20 transition-all active:scale-95"
                            >
                                Update Changes
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Modal2;
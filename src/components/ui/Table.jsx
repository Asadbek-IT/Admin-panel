import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import Modal from './Modal';
import Modal2 from './Modal2';

const Table = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateId, setUpdateId] = useState(0);
  
  // Состояния для пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Логика расчета данных для текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleModal = () => setOpenModal(true);

  const handleDelete = (id) => {
    if (window.confirm("Bu mahsulotni o'chirmoqchimisiz?")) {
      axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(() => alert("Muvaffaqiyatli o'chirildi"))
        .catch(err => console.error(err));
    }
  }

  const UpdateModal = (id) => {
    setUpdateModal(true);
    setUpdateId(id)
    
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Верхняя панель */}
      <div className="flex justify-between items-center bg-gray-900 p-4 rounded-xl border border-gray-800 shadow-lg">
        <div>
          <h2 className="text-xl font-bold text-white">Product Management</h2>
          <p className="text-sm text-gray-400">Jami: {data.length} ta mahsulot</p>
        </div>
        <button 
          onClick={handleModal} 
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all active:scale-95"
        >
          <FaPlus size={14} /> Add Product
        </button>
      </div>

      {openModal && <Modal setOpenModal={setOpenModal} />}

      {updateModal ? <Modal2 updateId={updateId} setUpdateModal={setUpdateModal}/> : null}

      {/* Таблица */}
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800/50 border-b border-gray-800 text-gray-300 uppercase text-xs font-semibold tracking-wider">
                <th className="px-6 py-4">T/R</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-center">Image</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800 text-gray-400">
              {currentItems.map(({ id, title, category, price, image }, index) => (
                <tr key={id} className="hover:bg-gray-800/30 transition-colors group">
                  <td className="px-6 py-4 text-indigo-400 font-medium">#{indexOfFirstItem + index + 1}</td>
                  <td className="px-6 py-4 text-white font-medium truncate max-w-[200px]">{title}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-800 rounded-md text-xs border border-gray-700">{category}</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-emerald-400">${price}</td>
                  <td className="px-6 py-4 text-center">
                    <img src={image} alt="" className="w-10 h-10 object-cover rounded-md border border-gray-700 inline-block" />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 bg-indigo-600/10 text-indigo-500 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"><FaEye size={14}/></button>
                      <button onClick={() =>
                        UpdateModal(id)} className="p-2 bg-amber-600/10 text-amber-500 rounded-lg hover:bg-amber-600 hover:text-white transition-all"><FaEdit size={14}/></button>
                      <button onClick={() => {handleDelete(id)
                      }} className="p-2 bg-red-600/10 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all"><FaTrash size={14}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Панель пагинации */}
        <div className="bg-gray-900 px-6 py-4 border-t border-gray-800 flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Showing <span className="text-white font-medium">{indexOfFirstItem + 1}</span> to <span className="text-white font-medium">{Math.min(indexOfLastItem, data.length)}</span> of <span className="text-white font-medium">{data.length}</span> results
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronLeft size={14} />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                  currentPage === i + 1 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                  : 'text-gray-400 hover:bg-gray-800 border border-transparent hover:border-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
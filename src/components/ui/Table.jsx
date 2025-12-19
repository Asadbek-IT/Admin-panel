import axios from 'axios';
import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Используем иконки для кнопок

const Table = ({ data }) => {

  //handleDelate

  const handleDelate = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`).then(data => console.log(data))
  }
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-2xl">
      <table className="w-full text-left border-collapse">
        {/* Заголовок таблицы */}
        <thead>
          <tr className="bg-gray-800/50 border-b border-gray-800 text-gray-300 uppercase text-xs font-semibold tracking-wider">
            <th className="px-6 py-4">T/R</th>
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Description</th>
            <th className="px-6 py-4 text-center">Image</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>

        {/* Тело таблицы */}
        <tbody className="divide-y divide-gray-800 text-gray-400">
          {data.map(({ id, title, category, price, description, image }, index) => (
            <tr 
              key={id} 
              className="hover:bg-gray-800/30 transition-colors duration-150 group"
            >
              <td className="px-6 py-4 font-medium text-indigo-400">#{index + 1}</td>
              <td className="px-6 py-4 text-white font-medium">{title}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-gray-800 rounded-md text-xs border border-gray-700">
                  {category}
                </span>
              </td>
              <td className="px-6 py-4 font-semibold text-emerald-400">${price}</td>
              <td className="px-6 py-4 max-w-xs truncate text-sm">{description}</td>
              <td className="px-6 py-4 text-center">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-12 h-12 object-cover rounded-lg border border-gray-700 group-hover:scale-110 transition-transform duration-200 inline-block"
                />
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-2">
                  <button className="p-2 bg-indigo-600/10 text-indigo-500 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
                    <FaEye size={16} />
                  </button>
                  <button className="p-2 bg-amber-600/10 text-amber-500 rounded-lg hover:bg-amber-600 hover:text-white transition-all">
                    <FaEdit size={16} />
                  </button>
                  <button onClick={() => {
                    handleDelate(id);
                  }} className="p-2 bg-red-600/10 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                    <FaTrash size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
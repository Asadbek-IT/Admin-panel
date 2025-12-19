import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from './Table';

const Products = () => {

  const [data, setData] = useState([]);

  try{
  useEffect (() => {
    getData(api);
  }, []) 
  }catch(error){
    throw new Error(error);
  }

  async function getData(url){
    const responce = await axios.get(url);

    setData(responce.data);
  }



  const api = `https://fakestoreapi.com/products`;

  return (
    <div className='min-h-screen bg-gray-900 p-8 text-white'>
      <Table data={data}/>
    </div>
  )
}

export default Products

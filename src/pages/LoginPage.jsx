import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const Api = `https://fakestoreapi.com/auth/login`

    const [username, setUsername] = useState('johnd');
    const [password, setPassword] = useState('m38rmF$');
    const navigate = useNavigate();

    //handleUsername

    const handleUsrnmae = (e) => {
        setUsername(e.target.value);
    };

    //handlePassword

        const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    //handleSubmit

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = {
            username: username,
            password: password,
        }

        axios.post(Api, user).then((data) => {
            const token = data.data.token;

            if(data.status != 201){

                toast.error('error!', {
                position: "top-center",
                });

            } 

            toast.success('succsesfull!', {
                position: "top-center",
                theme: "dark"
                });

                localStorage.setItem('token', token);

                setTimeout(() => {

                    navigate('/dashboard');

                }, 3000)
        })

    }
  return <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <form onSubmit={handleSubmit} className="w-120  text-center p-6 bg-white shadow-md rounded-lg space-y-4">

        <h1 className='text-2xl'>Login</h1>

        <p className='text-start'>Username</p>
        <input onChange={handleUsrnmae} required type="text" name='username' placeholder='username' value={username} className="w-full p-2 border border-gray-200 rounded "/>

        <p className='text-start'>Password</p>
        <input  onChange={handlePassword} required type="password" name='password' placeholder='password' value={password} className="w-full p-2 border border-gray-200 rounded "/>

        <button type='submit' class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded transition">Enter</button>

    </form>

  </div> 

}

export default LoginPage

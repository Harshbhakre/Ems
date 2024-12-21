import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submithandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('')
    setPassword('')
    window.r
  };

  return (
    <div className="bg-[#1c1c1c] flex h-screen w-screen items-center justify-center flex-col">
      
      <div className="mt-2 p-10 border rounded-md">
      <h1 className='text-5xl text-center mb-40'>Login</h1>
        <form
          onSubmit={submithandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border outline-none bg-transparent border-gray-600 rounded-md py-1 px-5 text-xl placeholder:text-gray-300"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border outline-none bg-transparent border-gray-600 rounded-md py-1 px-5 text-xl mt-4 placeholder:text-gray-300"
            type="password"
            placeholder="Enter Password"
          />
          <button
            type="submit"
            className="mt-5 bg-white text-[#1c1c1c] h-7 w-40 rounded hover:bg-[#1c1c1c] hover:text-white duration-300 hover:border"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

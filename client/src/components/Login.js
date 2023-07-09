import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logintes = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const Login = async (e) => {
    e.prenventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/login", {
        email: email,
        password: password,
      });
      Navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[400px] bg-gray-50 shadow-lg">
        <h1 className="text-center text-2xl font-semibold text-slate-700 mt-10">
          Login
        </h1>
        <form onSubmit={Login} className="p-10">
          <label className="blok" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full mt-1 py-2 px-2 mb-3 border-gray-300 border-spacing-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <label className="blok " htmlFor="email">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block w-full mt-1 py-2 px-2 my-2 border-gray-300 border-spacing-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <a href="/" className="text-sm text-red-400 ">
            Lupa password?
          </a>
          <button className="px-10 py-2 bg-blue-600 w-full mt-4 rounded-lg shadow-md text-white font-semibold">
            Login
          </button>
        </form>
        <p className="text-center text-sm mb-10">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-500">
            Buat akun
          </a>
        </p>
      </div>
    </div>
  );
};

export default Logintes;

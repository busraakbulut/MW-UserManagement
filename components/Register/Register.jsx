"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import register from "@/public/assets/register.png";
const Registration = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  const handleToggle = () => {
    setStatus(!status);
  };
  async function getUsers() {
    const url = "http://localhost:3004/users";
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    const existingUser = getUsers((user) => user.email === email);
    if (existingUser) {
      alert("Email is already registered");
      return;
    }

    const newUser = {
      id: self.crypto.randomUUID(),
      name,
      email,
      password,
      phone,
      role,
      status,
    };

    // localStorage.setItem("users", JSON.stringify(newUser));

    fetch("http://localhost:3004/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    router.push("/login");
  };

  return (
    <div className="flex flex-row-reverse">
      <div className=" flex w-3/4  flex-col  justify-center items-center h-screen">
        <form
          className="p-6 bg-white shadow-2xl shadow-blue-700 rounded-md w-80"
          onSubmit={handleRegistration}
        >
          <h2 className="text-2xl font-semibold mb-6">Registration</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Phone:</label>
            <input
              type="string"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Role:</label>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={status}
                onChange={handleToggle}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">
                {status ? "Active" : "Inactive"}
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 m-5 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
      <div className="flex flex-col w-3/4 justify-center items-center h-screen">
        <Image src={register} alt="register img" />
      </div>
    </div>
  );
};

export default Registration;

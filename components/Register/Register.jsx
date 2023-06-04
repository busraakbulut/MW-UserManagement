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
  const [status, setStatus] = useState("");

  async function getUsers() {
    const url = "http://localhost:3004/users";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }

  const handleRegistration = async (e) => {
    e.preventDefault();
    const existingUser = await getUsers();
    const isExist = existingUser.filter((user) => user.email === email);
    if (isExist.length > 0) {
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
    <div className="container mx-auto ">
      <div className="flex flex-col justify-center md:flex-row-reverse  ">
        <div className="flex w-full md:w-3/6 justify-center items-center p-20 md:p-36">
          <form
            className="p-6 w-full   bg-white shadow-2xl shadow-blue-700 rounded-md "
            onSubmit={handleRegistration}
          >
            <h2 className="text-2xl font-semibold mb-6">Registration</h2>
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
                type="number"
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
              <label className="relative inline-flex items-center rounded-md cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                />
                <div className="w-11 h-6 bg-gray-200 rounded-2xl peer-focus:ring-4 peer-focus:ring-blue-300    peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {status ? "Active" : "Inactive"}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className=" bg-blue-500 text-white py-2 px-4 my-2 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
        <div className="flex w-full md:w-3/6 justify-center items-center p-20 md:p-36">
          <Image src={register} alt="register image" />
        </div>
      </div>
    </div>
  );
};

export default Registration;

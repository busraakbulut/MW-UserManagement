"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import register from "@/public/assets/register.png";
import InputField from "@/components/Input/Input";
const Registration = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [status, setStatus] = useState("inactive");

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
    <div className="container m-auto">
      <div>
        <div className="flex sm:flex-col justify-center md:flex-row-reverse pt-12">
          <div className="flex w-full md:w-3/6 justify-center items-center p-32 ">
            <form
              className="p-6 w-full  bg-white shadow-2xl shadow-blue-700 rounded-md "
              onSubmit={handleRegistration}
            >
              <h2 className="text-3xl font-semibold mb-6">Register Page</h2>
              <InputField
                label="Name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <InputField
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <InputField
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <InputField
                label="Phone"
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
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
                    onChange={(e) =>
                      setStatus(e.target.checked ? "active" : "inactive")
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-2xl peer-focus:ring-4 peer-focus:ring-blue-300    peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {status === "inactive" ? "Inactive" : "Active"}
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className=" bg-blue-500 text-white py-2 px-4 my-2 rounded-md hover:bg-blue-700"
              >
                Register
              </button>

              <div className="text-sm font-medium text-gray-500">
                Already have an account?
                <a href="/login" className="text-blue-700 hover:underline px-1">
                  Login
                </a>
              </div>
            </form>
          </div>
          <div className="flex sm:flex-col w-full md:w-3/6 justify-center items-center p-32 md:p-20">
            <Image src={register} alt="register image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

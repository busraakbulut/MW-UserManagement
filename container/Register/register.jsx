"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import users from "@/mockdata/users.js";

const RegistrationPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    // Check if the email is already registered
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setError("Email is already registered");
      return;
    }

    // Create a new user object
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      role: "user",
      status: "active",
    };

    // Add the new user to the users array (or your data source)
    users.push(newUser);

    // Redirect to the login page after successful registration
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="p-6 bg-white shadow-md rounded-md w-80"
        onSubmit={handleRegistration}
      >
        <h2 className="text-2xl font-semibold mb-6">Registration</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;

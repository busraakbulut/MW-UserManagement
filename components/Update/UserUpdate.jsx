"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserUpdate = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const params = useParams();
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3004/users/${params?.id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [params?.id]);

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3004/users/${params?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => router.push("/userlist"));
  };
  function handleToggle() {
    setStatus(!status);
  }
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">User Update</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={user?.name}
            onChange={handleChanges}
            name="name"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={user?.email}
            onChange={handleChanges}
            name="email"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone:</label>
          <input
            type="text"
            value={user?.phone}
            onChange={handleChanges}
            name="phone"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Role:</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={user?.role}
            onChange={handleChanges}
            name="role"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Status:</label>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={user?.status}
            onChange={handleChanges}
            name="status"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserUpdate;

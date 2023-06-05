"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputField from "../Input/Input";

const UserUpdate = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const params = useParams();
  const [status, setStatus] = useState();
  useEffect(() => {
    fetch(`http://localhost:3004/users/${params?.id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [params?.id]);

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(typeof e.target.value);
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

  return (
    <div className="max-w-sm w-3/6 mx-auto mt-52">
      <h1 className="text-2xl text-center font-bold mb-4">User Update</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={user?.name}
          onChange={handleChanges}
        />
        <InputField
          label="Email "
          type="email"
          name="email"
          value={user?.email}
          onChange={handleChanges}
        />
        <InputField
          label="Password "
          type="password"
          name="password"
          value={user?.password}
          onChange={handleChanges}
        />
        <InputField
          label="Phone"
          type="number"
          name="phone"
          value={user?.phone}
          onChange={handleChanges}
        />

        <div className="mb-4">
          <label className="block mb-2">Role</label>
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
          <label className="block mb-2">Status</label>
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

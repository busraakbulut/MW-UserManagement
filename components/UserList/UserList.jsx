"use client";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { useRouter } from "next/navigation";
const UserList = () => {
  const [userCards, setUserCards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((response) => response.json())
      .then((data) => {
        setUserCards(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3004/users/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedUsers = userCards.filter((user) => user.id !== userId);
        setUserCards(updatedUsers);
      } else {
        console.log("Error deleting user");
      }
    } catch (error) {
      console.log("Server error", error);
    }
  };

  const handleEditUser = (userId) => {
    router.push(`/update/${userId}`);
  };

  return (
    <div className="flex flex-wrap">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 lg:w-1/6 bg-gray-100 border-r border-gray-300">
        {/* Sidebar content */}
        {/* ... */}
      </aside>

      {/* User List */}
      <main className="w-full md:w-3/4 lg:w-5/6 p-8">
        <h1 className="text-3xl text-center mb-5">User List</h1>

        <div className="overflow-x-auto">
          <table className="w-full bg-white table-fixed">
            <thead>
              <tr>
                <th className="w-1/6">Name</th>
                <th className="w-1/6">Email</th>
                <th className="w-1/6">Phone</th>
                <th className="w-1/6">Role</th>
                <th className="w-1/6">Status</th>
                <th className="w-1/6">Delete</th>
                <th className="w-1/6">Edit</th>
              </tr>
            </thead>
            <tbody>
              {userCards.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  index={userCards.indexOf(user)}
                  handleDeleteUser={handleDeleteUser}
                  handleEditUser={handleEditUser}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UserList;

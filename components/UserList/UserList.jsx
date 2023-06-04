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
    <div className="grid place-items-center">
      <div className="container md:w-3/4 sm:w-full text-center">
        <h1 className="text-3xl pb-5">Users List</h1>

        <div className="overflow-x-auto border shadow-lg shadow-blue-200">
          <table>
            <thead className="bg-gray-400  ">
              <tr className="h-10">
                <th className="w-1/3 ">Name</th>
                <th className="w-1/3 ">Email</th>
                <th className="w-1/3 ">Phone</th>
                <th className="w-auto ">Role</th>
                <th className="w-auto ">Status</th>
                <th className="w-auto ">Actions </th>
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
      </div>
    </div>
  );
};

export default UserList;

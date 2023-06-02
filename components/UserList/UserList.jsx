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
        console.log(data);
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
    router.push(`/update?id=${userId}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">User List</h1>
      <div className=" text-gray-700 p-3">
        <table className="items-center bg-white w-full border-collapse table-header-group">
          <thead className="text-sm uppercase">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody className="items-center text-center gap-4 table-row-group">
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
  );
};

export default UserList;

"use client";
import React from "react";
import {
  TrashIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const getStatusLabel = (status) => {
  return status ? "Active" : "Inactive";
};

function UserCard({ user, handleDeleteUser, index, handleEditUser }) {
  return (
    <tr className={index % 2 === 0 ? "bg-gray-500" : "bg-gray-300"}>
      <td className="p-3 first-letter:uppercase">{user.name}</td>
      <td className="p-3 first-letter:uppercase">{user.email}</td>
      <td className="p-3 first-letter:uppercase ">{user.phone}</td>
      <td className="p-3 first-letter:uppercase ">{user.role}</td>
      <td className="p-3 first-letter:uppercase">
        {getStatusLabel(user.status)}
      </td>
      <td>
        <button className="p-3" onClick={() => handleDeleteUser(user.id)}>
          <TrashIcon className="w-7 h-7 text-black" />
        </button>
      </td>
      <td>
        <button className="p-3" onClick={() => handleEditUser(String(user.id))}>
          <AdjustmentsHorizontalIcon className="w-7 h-7 text-black" />
        </button>
      </td>
    </tr>
  );
}

export default UserCard;

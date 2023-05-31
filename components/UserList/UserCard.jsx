"use client";
import React from "react";
import {
  TrashIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const getStatusLabel = (status) => {
  return status ? "Active" : "Inactive";
};

function UserCard({ user, handleDeleteUser, index, handleEditUser }) {
  return (
    <tr className={index % 2 === 0 ? "bg-gray-500" : "bg-gray-700"}>
      <td className="p-3">{user.name}</td>
      <td className="p-3">{user.email}</td>
      <td className="p-3">{user.phone}</td>
      <td className="p-3">{user.role}</td>
      <td className="p-3">{getStatusLabel(user.status)}</td>

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

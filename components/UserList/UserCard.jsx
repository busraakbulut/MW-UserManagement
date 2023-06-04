"use client";
import React from "react";
import {
  TrashIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

function UserCard({ user, handleDeleteUser, index, handleEditUser }) {
  const StatusIcons = () => {
    const circleStyle = "h-3 w-3 rounded-full inline-block mr-2";

    if (user.status === "active") {
      return <span className={`${circleStyle} bg-green-500`}></span>;
    } else if (user.status === "inactive") {
      return <span className={`${circleStyle} bg-red-500`}></span>;
    } else {
      return null;
    }
  };
  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-300"}>
      <td className="p-3 first-letter:uppercase ">{user.name}</td>
      <td className="p-3 ">{user.email}</td>
      <td className="p-3 ">{user.phone}</td>
      <td className="p-3 first-letter:uppercase ">{user.role}</td>
      <td className="p-3">{StatusIcons()}</td>
      <td className="flex p-3">
        <button className="p-3" onClick={() => handleDeleteUser(user.id)}>
          <TrashIcon className="w-7 h-7 text-black" />
        </button>
        <button className="p-3" onClick={() => handleEditUser(String(user.id))}>
          <AdjustmentsHorizontalIcon className="w-7 h-7 text-black" />
        </button>
      </td>
    </tr>
  );
}

export default UserCard;

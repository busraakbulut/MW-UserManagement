"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import usersData from "@/mockdata/users.js";

export default function UserUpdate() {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState(
    usersData.find((u) => u.id === Number(userId))
  );

  const handleUpdateUser = (e) => {
    e.preventDefault();
    // Perform the update logic here
    console.log("User updated:", user);
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Update</h1>
      <form onSubmit={handleUpdateUser}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={user.status}
            onChange={(e) => setUser({ ...user, status: e.target.value })}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

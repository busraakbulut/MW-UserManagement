"use client";
import UserUpdate from "@/components/UserUpdate/Update";
import Sidebar from "@/components/UserList/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";

function UserUpdateContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch the user data from the database
        const response = await fetch("http://localhost:3004/users"); // Replace with your actual API endpoint
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <Sidebar />
      {user ? <UserUpdate id={user.id} /> : <p>Loading...</p>}
    </div>
  );
}

export default UserUpdateContainer;

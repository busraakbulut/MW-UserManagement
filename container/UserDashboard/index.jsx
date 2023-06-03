import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import UserList from "@/components/UserList/UserList";

function UserDashboardContainer() {
  return (
    <div>
      <Sidebar />
      <UserList />
    </div>
  );
}

export default UserDashboardContainer;

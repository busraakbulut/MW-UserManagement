import React from "react";
import BackgroundImage from "../HomePage/bgImg/Background";
import Sidebar from "./Sidebar/Sidebar";
import UserList from "./UserList";

function UserDashboard() {
  return (
    <div>
      <Sidebar />
      <UserList />
    </div>
  );
}

export default UserDashboard;

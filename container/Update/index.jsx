import Sidebar from "@/components/Sidebar/Sidebar";
import UserUpdate from "@/components/Update/UserUpdate";

function UserUpdateContainer() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Sidebar className="col-span-3 " />
      <UserUpdate className="col-span-9" />
    </div>
  );
}

export default UserUpdateContainer;

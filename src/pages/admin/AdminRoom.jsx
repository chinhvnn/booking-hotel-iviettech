import React from "react";
import RoomHeader from "../../component/admin/room/RoomHeader";
import RoomList from "../../component/admin/room/RoomList";
import AdminLayout from "../../layout/AdminLayout";

function AdminRoom() {
  return (
    // <AdminLayout>
    <>
      <RoomHeader />
      <RoomList />
    </>
    // </AdminLayout>
  );
}

export default AdminRoom;

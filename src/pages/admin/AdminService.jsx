import React from "react";
import ServiceHeader from "../../component/admin/services/ServiceHeader";
import ServiceList from "../../component/admin/services/ServiceList";
import AdminLayout from "../../layout/AdminLayout";

function AdminService() {
  return (
    // <AdminLayout>
      <>
        <ServiceHeader />
        <ServiceList />
      </>
    // </AdminLayout>
  );
}

export default AdminService;

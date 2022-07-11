import React, { Children } from "react";
import ContentLayout from "../component/admin/layout/ContentLayout";
import Header from "../component/admin/layout/Header";
import LeftSideBar from "../component/admin/layout/LeftSideBar";

function AdminLayout({children}) {
  return (
    <div className="admin-layout">
      <Header />
      <div>
        <LeftSideBar />
        <ContentLayout>
          {children}
        </ContentLayout>
      </div>
    </div>
  );
}

export default AdminLayout;

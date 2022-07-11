import React from "react";
import OrderHeader from "../../component/admin/orders/OrderHeader";
import OrderList from "../../component/admin/orders/OrderList";

function AdminOrder() {
  return (
    <div>
      <OrderHeader />
      <OrderList />
    </div>
  );
}

export default AdminOrder;

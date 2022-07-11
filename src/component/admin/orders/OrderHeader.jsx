import { Button, Input } from "@mui/material";
import React from "react";
import { useLocation, Link } from "react-router-dom";

function OrderHeader() {
  const location = useLocation();
  return (
    <div className="box-page">
      <div className="d-flex j-content-between a-items-center">
        <ul className="d-flex">
          <li
            className={
              location.pathname === "/admin/orders"
                ? "mr-3 bold disable-link"
                : "mr-3"
            }
          >
            <Link to={"/admin/orders"}>Tất cả</Link>
          </li>
          <li
            className={
              location.pathname === "/admin/orders/1"
                ? "mr-3 bold disable-link"
                : "mr-3"
            }
          >
            <Link to={"/admin/orders/1"}>Đã xử lý</Link>
          </li>
          <li
            className={
              location.pathname === "/admin/orders/2"
                ? "mr-3 bold disable-link"
                : "mr-3"
            }
          >
            <Link to={"/admin/orders"}>Đã xử lý</Link>
          </li>
        </ul>
        <div>
          <Input placeholder="Search" />{" "}
          <Button variant="contained" size="small">
            Search
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default OrderHeader;

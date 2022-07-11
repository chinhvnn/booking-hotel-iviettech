import { Button, Input } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function RoomHeader() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="box-page">
      <div className="d-flex j-content-between a-items-center">
        <ul className="d-flex">
          <li
            className={
              location.pathname === "/admin/room" ? "mr-2 bold disable-link" : "mr-2"
            }
          >
            <Link to={"/admin/room"}>All room</Link>
          </li>
          <li className="mr-2">
            <Link to={"/admin/room/available"}>Available room</Link>
          </li>
          <li className="mr-2">
            <Link to={"/admin/room/unavailable"}>Unavailable room</Link>
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

export default RoomHeader;

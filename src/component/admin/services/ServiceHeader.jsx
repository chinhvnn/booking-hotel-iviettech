import { Button, Input } from "@mui/material";
import React from "react";

function ServiceHeader() {
  return (
    <div className="box-page">
      <div className="d-flex j-content-between a-items-center">
        <ul className="d-flex">
          <li className="mr-2">All Service</li>
          <li className="mr-2">Avaible Service</li>
          <li className="mr-2">UnAvaible Service</li>
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

export default ServiceHeader;

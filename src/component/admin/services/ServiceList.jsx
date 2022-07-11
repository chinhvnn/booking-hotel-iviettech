import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../../constants/ACTION";
import Service from "./Service";

function ServiceList() {
  const dispatch = useDispatch();
  const roomServiceData = useSelector((state) => state.room.roomServiceData);
  console.log(roomServiceData);
  useEffect(() => {
    dispatch({ type: ACTION.GET_ALL_SERVICE });
  }, []);

  return (
    <div className="box-page">
      <h4>ROOM LIST</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">DETAIL SERVICE</th>
            <th scope="col">NOTE</th>
            <th scope="col">EDIT</th>
          </tr>
        </thead>
        <tbody>
          {roomServiceData && roomServiceData.map(item => <Service key={item.id} data={item}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../../constants/ACTION";
import Room from "./Room";

function RoomList() {
  const dispatch = useDispatch();
  const roomData = useSelector((state) => state.room.roomData);
  useEffect(() => {
    dispatch({ type: ACTION.GET_ALL_ROOM });
  }, []);

  return (
    <div className="box-page">
      <h4>ROOM LIST</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">IMG</th>
            <th scope="col">NAME</th>
            <th scope="col">SLOT</th>
            <th scope="col">CUSTOM SERVICE</th>
            <th scope="col">PRICE/ NIGHT</th>
            <th scope="col">EDIT</th>
          </tr>
        </thead>
        <tbody>
          {roomData && roomData.map(item => <Room key={item.id} data={item}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default RoomList;

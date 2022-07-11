import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../../constants/ACTION";
import OverviewItem from "./OverviewItem";

function OverView() {
  const dispatch = useDispatch();
  const overview = useSelector((state) => state.overview.overview);
  useEffect(() => {
    dispatch({ type: ACTION.GET_ALL_OVERVIEW });
  }, []);

  return (
    <div className="box-page">
      <h4>ROOM LIST</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ROOM NAME</th>
            <th scope="col">SERVICE</th>
            <th scope="col">CLIENT</th>
            <th scope="col">INVOICE</th>
            <th scope="col">STATUS</th>
            <th scope="col">NOTE</th>
            <th scope="col">VIEW</th>
          </tr>
        </thead>
        <tbody>
          {overview && overview.map(item => <OverviewItem key={item.id} data={item}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default OverView;

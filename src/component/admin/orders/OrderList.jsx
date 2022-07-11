import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../../../constants/ACTION";
import Order from "./Order";

function OrderList() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.client.orders);
  console.log(orders);
  useEffect(() => {
    dispatch({ type: ACTION.GET_ALL_ORDER });
  }, []);

  return (
    <div className="box-page">
      <h4>ORDER LIST</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Room</th>
            <th scope="col">Date Start</th>
            <th scope="col">Date End</th>
            <th scope="col">Total day</th>
            <th scope="col">Total value</th>
            <th scope="col">Check Out</th>
            <th scope="col">Note</th>
            <th scope="col">Status</th>
            <th scope="col">EDIT</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((item) => <Order key={item.id} data={item} />)}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;

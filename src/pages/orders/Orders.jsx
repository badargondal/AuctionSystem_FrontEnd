import React from "react";

function Orders(props) {
  console.log("orders data", props.order);
  const orderData = props.order;
  return (
    <>
      <div className="container my-5">
        <table class="table table-hover thead-dark">
          <thead class="bg-dark">
            <tr class="text-light">
              <th scope="col">Sr.no</th>
              <th scope="col">Total Bill</th>
              <th scope="col">Order Status</th>
              <th scope="col">Buyer Name</th>
            </tr>
          </thead>
          {/* <tbody>
            {orderData.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.total}</td>
                <td>{item.status}</td>
                <td>Badar Masood</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </>
  );
}

export default Orders;

import axios from "axios";
import React from "react";
import { useState } from "react";

import getAuthorizedData from "../../api/getAuthorizedData";
function BiddingReport() {
  const [data, setData] = useState(null);
  React.useEffect(() => {
    getAuthorizedData(`/admin/bids`)
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="container my-3">
      <table class="table table-hover thead-dark">
        <thead class="bg-dark">
          <tr class="text-light">
            <th scope="col">Product Id</th>
            <th scope="col">Title</th>
            <th scope="col">Orignal Price </th>
            <th scope="col">Bid Amount </th>
            <th scope="col">Buyer Name</th>
            <th scope="col">Bid Winner Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <>
              <tr>
                <th scope="row">{item.productId._id}</th>
                <td>{item.productId.title}</td>
                <td>{item.productId.price}</td>
                <td>{item.bidAmount}</td>
                <td>{item.buyerId.name}</td>
                <td>{item.buyerId.email}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BiddingReport;

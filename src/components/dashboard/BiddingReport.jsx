import React from "react";
import { useState } from "react";

import getAuthorizedData from "../../api/getAuthorizedData";
function BiddingReport() {
  const [data, setData] = useState(null);
  React.useEffect(() => {
    getAuthorizedData(`/admin/bids`)
      .then((response) => {
        
        setData(response);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="container my-3">
      <table class="table table-hover thead-dark">
        <thead class="bg-dark">
          <tr class="text-light">
            <th scope="col">Sr No</th>
            <th scope="col">Product Id</th>
            <th scope="col">Title</th>
            <th scope="col">Price </th>
            <th scope="col">Seller Name</th>
            <th scope="col">Seller Email</th>
            <th scope="col">Bid Amount </th>
            <th scope="col">Bid Winner Name</th>
            <th scope="col">Bid Winner Email</th>
            <th scope="col">Total Bids</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <>
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.productId._id}</td>
                <td>{item.productId.title}</td>
                <td>{item.productId.price}</td>
                <td>{item.sellerId.name}</td>
                <td>{item.sellerId.email}</td>
                <td>{item.bids[0].bidAmount}</td>
                <td>{item.bids[0].buyerId.name}</td>
                <td>{item.bids[0].buyerId.email}</td>
                <td>{item.bids.length}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BiddingReport;

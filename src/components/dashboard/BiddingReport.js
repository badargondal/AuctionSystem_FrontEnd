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

  const products = data?.map((i) => i.productId);
  const unique = [...new Set(products?.map((item) => item._id))];
  // console.log("arrayUniqueByKey", unique);

  data?.sort((a, b) => (a.bidAmount > b.bidAmount ? -1 : 1));
  console.log("data", data);

  return (
    <div className="container my-3">
      <table class="table table-hover thead-dark">
        <thead class="bg-dark">
          <tr class="text-light">
            <th scope="col">Product Id</th>
            <th scope="col">Buyer Name</th>
            <th scope="col">Title</th>
            <th scope="col">Price </th>
            <th scope="col">Buyer Name</th>
            <th scope="col">Product Status</th>
            <th scope="col">Number of Bids</th>
            <th scope="col">Bid Winner Name</th>
            <th scope="col">Bid Winner Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <>
              <tr>
                <th scope="row">{item.productId._id}</th>
                <td>{item.buyerId.name}</td>
                <td>d.title</td>
                <td>{item.bidAmount}</td>
                <td>.name</td>
                <td>d.status</td>
                <td>asd</td>
                <td>abc</td>
                <td>abc@gmail.com</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BiddingReport;

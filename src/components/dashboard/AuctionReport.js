import axios from "axios";
import React from "react";
import { useState } from "react";
import GetData from "../../api/getdata";
function AuctionReport() {
  const [data, setData] = useState(null);
  React.useEffect(() => {
    GetData(`${process.env.REACT_APP_AUCTIONS}`)
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
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Price </th>
            <th scope="col">Seller Name</th>
            <th scope="col">Product Status</th>
            <th scope="col">End Time</th>
            <th scope="col">Minimum Bids</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <>
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.productId.title}</td>
                <td>{item.productId.price}</td>
                <td>{item.sellerId.name}</td>
                <td>{item.productId.status}</td>
                <td>{item.endTime}</td>
                <td>{item.minimumBids}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuctionReport;

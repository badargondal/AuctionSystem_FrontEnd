import React from "react";
import Header from "../../../components/Header/header";
import { useState } from "react";
import getAuthorizedData from "../../../api/getAuthorizedData";

function PruchasedProducts() {
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
    <>
      <Header />
      <div className="container my-3">
        <table class="table table-hover thead-dark">
          <thead class="bg-dark">
            <tr class="text-light">
              <th scope="col">Product Id</th>
              <th scope="col">Title</th>
              <th scope="col">Orignal Price </th>
              <th scope="col">Your Price </th>
              <th scope="col">Seller Name </th>
              <th scope="col">Seller Email </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) =>
              item.bids[0].buyerId._id == localStorage.getItem("buyerId") ? (
                <>
                  <tr>
                    <th scope="row">{item.bids[0].productId._id}</th>
                    <td>{item.bids[0].productId.title}</td>
                    <td>{item.bids[0].productId.price}</td>
                    <td>{item.bids[0].bidAmount}</td>
                    <td>{item.sellerId.name}</td>
                    <td>{item.sellerId.email}</td>
                  </tr>
                </>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PruchasedProducts;

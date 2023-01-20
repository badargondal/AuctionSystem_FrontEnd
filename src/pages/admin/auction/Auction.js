import axios from "axios";
import React from "react";

function Auction(props) {
  console.log("auction data", props.auction);
  const auctionData = props.auction;
  return (
    <>
      <div className="container my-5">
        <table class="table table-hover thead-dark">
          <thead class="bg-dark">
            <tr class="text-light">
              <th scope="col">Sr.no</th>
              <th scope="col">Title</th>
              <th scope="col">Price </th>
              <th scope="col">Seller Name</th>
              <th scope="col">Product Status</th>
              <th scope="col">End Time</th>
              <th scope="col">Minimum Bids</th>
              <th scope="col" className="mx-5">
                Approval
              </th>
            </tr>
          </thead>
          <tbody>
            {auctionData.map((item, index) => (
              <>
                {!item.approved && (
                  <tr key={item._id}>
                    {!item.approved ? <th scope="row">{item._id}</th> : null}
                    <td>{item.productId.title}</td>
                    <td>{item.productId.price}</td>
                    <td>{item.sellerId.name}</td>
                    <td>{item.productId.status}</td>
                    <td>{item.endTime}</td>
                    <td>{item.minimumBids}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-outline-primary "
                        onClick={async () => {
                          const response = await axios
                            .put(
                              `${process.env.REACT_APP_BASE_URL}/admin/auction/${item._id}`,
                              {
                                approved: true,
                              },
                              {
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: localStorage.getItem("token"),
                                },
                              }
                            )
                            .then(
                              (response) => {
                                console.log(response.data.message);
                                alert(response.data.message);
                              },
                              (error) => {
                                console.log(error);
                              }
                            );
                        }}
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Auction;

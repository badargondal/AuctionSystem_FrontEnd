import axios from "axios";
import React from "react";
import { useState } from "react";
function Buyers() {
  return (
    <div className="container my-3">
      <table class="table table-hover thead-dark">
        <thead class="bg-dark">
          <tr class="text-light">
            <th scope="col">Sr.no</th>
            <th scope="col">Title</th>
            <th scope="col">Pasdrice </th>
            <th scope="col">Selladsder Name</th>
            <th scope="col">Proasdduct Status</th>
            <th scope="col">Endasd Time</th>
            <th scope="col">Minasdimum Bids</th>
            <th scope="col" className="mx-5">
              Need Approval
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {auctionData.map((item, index) => ( */}
          <>
            <tr>
              <th scope="row">{1 + 1}</th>
              <td>d.title</td>
              <td>d.price</td>
              <td>.name</td>
              <td>d.status</td>
              <td>asd</td>
              <td>abc</td>
              <td>
                {" "}
                <button
                  className="btn btn-outline-primary "
                  onClick={async () => {
                    const response = await axios
                      .put(
                        `${
                          process.env.REACT_APP_BASE_URL
                        }/admin/auction/${123}`,
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
                <button
                  className="btn btn-outline-primary mx-2 "
                  onClick={async () => {
                    const response = await axios
                      .put(
                        `${
                          process.env.REACT_APP_BASE_URL
                        }/admin/auction/${123}`,
                        {
                          approved: false,
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
                          alert("Auction is not approved");
                        },
                        (error) => {
                          console.log(error);
                        }
                      );
                  }}
                >
                  Not Approve
                </button>
              </td>
            </tr>
          </>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Buyers;

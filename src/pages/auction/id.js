import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyNavbar from "../../components/navbar";

function ID(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const auction = location.state.auction;
  console.log("auc", auction);
  const req = location.state.req;
  const [bid, setBid] = useState(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "bid") {
      setBid(value);
    }
  };

  const convert_date = (endTime) => {
    const date = new Date(endTime);
    return date.toLocaleString();
  };

  const handleSubmit = async () => {
    if (bid > auction.productId.price) {
      const data = {
        bidAmount: bid,
        productId: auction.productId._id,
      };
      const response = await axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/buyer/bid/${auction._id}`,
          data,
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
    } else {
      alert(
        `Your Price Rs : ${bid} is lower than Actual Price Rs : ${auction.productId.price}.`
      );
    }
  };
  return (
    <>
      <MyNavbar />
      <section className="vh-80" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black my-5"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body">
                  <div className="row justify-content-center ">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Auction Details
                      </p>
                      <div className="form mx-1 mx-md-4">
                        <div className="form-body">
                          <div className="d-flex flex-row align-items-center mb-3">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Title</p>
                              <h4>{auction.productId.title}</h4>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-3">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Price</p>
                              <h4>{auction.productId.price}</h4>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-3">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Status</p>
                              <h4>{auction.productId.status}</h4>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-3">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Description</p>
                              <h4>{auction.productId.description}</h4>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-3">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Auction End Time</p>
                              <h4>{convert_date(auction.endTime)}</h4>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-3">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Sold By</p>
                              <h6>Name : {auction.sellerId.name}</h6>
                              <h6>Email : {auction.sellerId.email}</h6>
                            </div>
                          </div>
                          {auction.bids[0] && (
                            <div className="d-flex flex-row align-items-center mb-3">
                              <div className="form-outline flex-fill">
                                <p className="my-0">
                                  Highest Bid : {auction.bids[0].bidAmount}
                                </p>
                              </div>
                            </div>
                          )}

                          {req == "buy" && (
                            <div className="d-flex flex-row align-items-center mb-3">
                              <div className="form-outline flex-fill">
                                {localStorage.getItem("buyerId") ? (
                                  <>
                                    <label className="form-label my-0">
                                      Bid Amount
                                    </label>
                                    <input
                                      type="number"
                                      value={bid}
                                      onChange={(e) => handleInputChange(e)}
                                      id="bid"
                                      placeholder="Enter your Bid"
                                      className="form-control"
                                    />
                                    <button
                                      onClick={() => handleSubmit()}
                                      type="submit"
                                      className="btn btn-primary btn-lg my-3"
                                    >
                                      Place Bid
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <Link to="/buyer/login">
                                      <button className="btn btn-primary btn-lg">
                                        Login First to Bid
                                      </button>
                                    </Link>
                                  </>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-4 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={`${auction.productId.imgUrl}`}
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ID;

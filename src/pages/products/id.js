import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyNavbar from "../../components/navbar";

function ID(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.item;
  const [bid, setBid] = useState(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "bid") {
      setBid(value);
    }
  };

  const handleSubmit = async () => {
    const data = {
      bidAmount: bid,
      productId: product._id,
    };

    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/buyer/bid`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(
        (response) => {
          console.log(response.data.message);
          alert(response.data.message);
        },
        (error) => {
          console.log(error);
        }
      );
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
                <div className="card-body ">
                  <div className="row justify-content-center ">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Product Details
                      </p>
                      <div className="form mx-1 mx-md-4">
                        <div className="form-body">
                          <div className="d-flex flex-row align-items-center mb-3">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Title</p>
                              <h3>{product.title}</h3>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Minimum Bid</p>
                              <h3>{product.price}</h3>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Description</p>
                              <h3>{product.description}</h3>
                            </div>
                          </div>
                          {/* <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Seller Name</p>
                              <h6>{product.sellerId.name}</h6>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill">
                              <p className="my-0">Seller Email</p>
                              <h6>{product.sellerId.email}</h6>
                            </div>
                          </div> */}

                          <div className="d-flex flex-row align-items-center mb-4">
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
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-4 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={`${product.imgUrl}`}
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

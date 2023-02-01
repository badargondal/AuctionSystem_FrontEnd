import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import MyNavbar from "../../../../components/navbar";
import getAuthorizedData from "../../../../api/getAuthorizedData";
function Index() {
  const navigate = useNavigate();
  const [startTime, setstartTime] = useState(null);
  const [bids, setBids] = useState(null);
  const [endTime, setendTime] = useState(null);
  const [productId, setproductId] = useState(null);

  const [products, setProducts] = React.useState(null);
  const [loading, setloading] = React.useState(true);
  React.useEffect(() => {
    getAuthorizedData(`/seller/products`)
      .then((response) => {
        setProducts(response);
        setloading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "startTime") {
      setstartTime(value);
    }
    if (id === "bids") {
      setBids(value);
    }
    if (id === "endTime") {
      setendTime(value);
    }
    if (id === "product") {
      setproductId(value);
    }
  };

  const handleSubmit = async () => {
    const data = {
      startTime: startTime,
      minimumBids: bids,
      endTime: endTime,
      productId: productId,  
    };
    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/seller/auction/create`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(
        (response) => {
          alert(response.data.message);
          navigate("/auction");
        },
        (error) => {
          console.log(error);
          alert(error);
        }
      );
  };

  return (
    <>
      <MyNavbar />
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        List Product for Auction
                      </p>
                      <div className="form mx-1 mx-md-4">
                        <div className="form-body">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">Start Time</label>
                              <input
                                type="datetime-local"
                                value={startTime}
                                onChange={(e) => handleInputChange(e)}
                                id="startTime"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">End Time</label>
                              <input
                                type="datetime-local"
                                value={endTime}
                                onChange={(e) => handleInputChange(e)}
                                id="endTime"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">Minimum Bids</label>
                              <input
                                type="number"
                                value={bids}
                                onChange={(e) => handleInputChange(e)}
                                id="bids"
                                placeholder="Enter Minimum Bids"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" for="products">
                                Select Product
                              </label>
                              <br></br>
                              {loading ? (
                                <CircularProgressbar />
                              ) : (
                                <select
                                  name="product"
                                  id="product"
                                  onChange={(e) => handleInputChange(e)}
                                >
                                  {products.map((item) => (
                                    <option
                                      className="form-control"
                                      value={item._id}
                                      key={item._id}
                                    >
                                      {item.title}
                                    </option>
                                  ))}
                                </select>
                              )}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleSubmit()}
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/auction-in-art-gallery-4737496-3944020.png"
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

export default Index;

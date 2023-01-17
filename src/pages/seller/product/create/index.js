import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MyNavbar from "../../../../components/navbar";
function Index() {
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [imgGroup, setImgGroup] = useState(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "title") {
      setTitle(value);
    }
    if (id === "price") {
      setPrice(value);
    }
    if (id === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = async () => {
    const data = {
      title: title,
      price: price,
      description: description,
    };

    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/seller/product`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(
        (response) => {
          console.log(response.data.message);
        },
        (error) => {
          console.log(error);
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
                        Create Product
                      </p>
                      <div className="form mx-1 mx-md-4">
                        <div className="form-body">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">Title</label>
                              <input
                                type="text"
                                value={title}
                                onChange={(e) => handleInputChange(e)}
                                id="title"
                                placeholder="Enter title"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">price</label>
                              <input
                                type="number"
                                value={price}
                                onChange={(e) => handleInputChange(e)}
                                id="price"
                                placeholder="Enter price"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">Description</label>
                              <input
                                type="text"
                                value={description}
                                onChange={(e) => handleInputChange(e)}
                                id="description"
                                placeholder="Enter description"
                                className="form-control"
                              />
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

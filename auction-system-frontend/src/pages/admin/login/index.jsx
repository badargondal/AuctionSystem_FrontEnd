import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MyNavbar from "../../../components/navbar";
import { useNavigate } from "react-router-dom";
function Index() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };

    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/admin/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("adminId", response.data.adminId);
          navigate("/");
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
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login As a Admin
                      </p>
                      <div className="form mx-1 mx-md-4">
                        <div className="form-body">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">Email</label>
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => handleInputChange(e)}
                                id="email"
                                placeholder="Enter your email"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">Password</label>
                              <input
                                type="password"
                                value={password}
                                onChange={(e) => handleInputChange(e)}
                                id="password"
                                placeholder="Enter your password"
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
                          Login
                        </button>
                        <p className="my-2">
                          Create Other Admins{" "}
                          <span>
                            <Link to="/admin/signup">Sign Up</Link>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000"
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MyNavbar from "../../../components/navbar";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const [name, setname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setname(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/buyer/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          console.log(response.data.message);
          alert(response.data.message);
          navigate("/buyer/login");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up As a Buyer
                      </p>
                      <div className="form mx-1 mx-md-4">
                        <div className="form-body">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">Name</label>
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => handleInputChange(e)}
                                id="name"
                                placeholder="Enter your name"
                                className="form-control"
                              />
                            </div>
                          </div>
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
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label">
                                Confirm Password
                              </label>
                              <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => handleInputChange(e)}
                                id="confirmPassword"
                                placeholder="Confirm your password"
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
                          Register
                        </button>
                        <p className="my-2">
                          Already have an account ?{" "}
                          <span>
                            <Link to="/buyer/login">Sign In</Link>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/003/689/225/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
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

export default SignUp;

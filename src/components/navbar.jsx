import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <Link class="navbar-brand" to="/">
            Auction System
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <Link class="nav-item nav-link" to="/home">
                Home
              </Link>
              <Link class="nav-item nav-link" to="/auction">
                Auction
              </Link>
              <Link class="nav-item nav-link" to="/products">
                Products
              </Link>

              <Link class="nav-item nav-link" to="/orders">
                Orders
              </Link>

              {localStorage.getItem("sellerId") &&
              localStorage.getItem("token") ? (
                <>
                  <Link class="nav-item nav-link" to="/seller/products">
                    My Products
                  </Link>
                  <Link class="nav-item nav-link" to="/seller/product/create">
                    Add Product
                  </Link>
                  <Link class="nav-item nav-link" to="/seller/auction/create">
                    Create Auction
                  </Link>
                  <Link class="nav-item nav-link" to="/seller/product/create">
                    Report
                  </Link>
                  <button
                    className="btn btn-primary mx-5"
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {localStorage.getItem("token") ? null : (
                    <Link class="nav-item nav-link" to="/seller/login">
                      Seller Sign in
                    </Link>
                  )}
                </>
              )}

              {!localStorage.getItem("token") ? (
                <>
                  <Link class="nav-item nav-link " to="/buyer/login">
                    Buyer Sign in
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;

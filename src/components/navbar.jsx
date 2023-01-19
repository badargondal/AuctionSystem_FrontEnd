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
              {/* Admin Routes */}
              {localStorage.getItem("adminId") && (
                <>
                  <Link class="nav-item nav-link" to="/auction">
                    Auction
                  </Link>
                  <Link class="nav-item nav-link" to="/admin/auctions">
                    Approve Auction
                  </Link>
                  <Link class="nav-item nav-link" to="/admin/dashboard">
                    Dashboard
                  </Link>
                  <Link class="nav-item nav-link" to="/admin/signup">
                    Add Admins
                  </Link>
                </>
              )}
              {/* Seller Routes */}
              {localStorage.getItem("sellerId") && (
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
                </>
              )}
              {/* Buyer Routes */}
              {localStorage.getItem("buyerId") && (
                <>
                  <Link class="nav-item nav-link" to="/home">
                    Home
                  </Link>
                  <Link class="nav-item nav-link" to="/auction">
                    Auction
                  </Link>
                  <Link class="nav-item nav-link" to="/products">
                    Products
                  </Link>
                </>
              )}

              {/* public Routes */}
              {localStorage.getItem("token") ? (
                <button
                  className="btn btn-primary mx-5"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link class="nav-item nav-link" to="/home">
                    Home
                  </Link>
                  <Link class="nav-item nav-link" to="/auction">
                    Auction
                  </Link>
                  <Link class="nav-item nav-link" to="/products">
                    Products
                  </Link>

                  <Link class=" btn btn-outline-primary mx-2" to="/buyer/login">
                    Buyer Sign in
                  </Link>
                  <Link
                    class=" btn btn-outline-primary mx-2"
                    to="/seller/login"
                  >
                    Seller Sign in
                  </Link>
                  <Link className="btn btn-primary mx-4" to="/admin/login">
                    Admin
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;

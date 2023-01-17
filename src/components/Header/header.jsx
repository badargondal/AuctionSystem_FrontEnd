import React from "react";
import "./header.css";
function Header(props) {
  return (
    <>
      <div>
        <div className="jumbotron bg-cover text-white row d-flex justify-content-center hero-image">
          <div className="col-md-6 text-center">
            <div class="p-lg-5 mx-auto mt-5">
              <h1>
                <strong>Online Auction System</strong>
              </h1>
              <h5 class="lead font-weight-light">
                Buy and Sell with Single Click
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

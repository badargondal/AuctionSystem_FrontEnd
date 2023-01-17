import React from "react";
import "./style.css";
// import "src/pages/unauthorized/style.css";
function Index() {
  return (
    <>
      <div class="body">
        <div class="lock"></div>
        <div class="message">
          <h1>Access to this page is restricted</h1>
          <p>
            Please check with the site admin if you believe this is a mistake.
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;

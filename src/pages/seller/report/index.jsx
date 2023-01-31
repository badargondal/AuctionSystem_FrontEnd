import React from "react";
import getAuthorizedData from "../../../api/getAuthorizedData";
import Header from "../../../components/Header/header";
import MyNavbar from "../../../components/navbar";
import Report from "./Report";

function Index() {
  const [auctions, setAuctions] = React.useState(null);

  React.useEffect(() => {
    getAuthorizedData(`/seller/auctions/all`)
      .then((response) => {
        setAuctions(response);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <MyNavbar />
      <Header />
      <Report data={auctions} />
    </>
  );
}

export default Index;

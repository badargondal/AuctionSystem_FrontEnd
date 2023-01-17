import React from "react";
import GetData from "../../../api/getdata";
import Header from "../../../components/Header/header";
import MyNavbar from "../../../components/navbar";
import Auction from "./Auction";

function Index() {
  const [auction, setauction] = React.useState(null);

  React.useEffect(() => {
    GetData(`${process.env.REACT_APP_AUCTIONS}`)
      .then((response) => {
        console.log(response);
        setauction(response);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <MyNavbar />
      <Header />
      {/* <Auction auction={auction} /> */}
      {auction === null ? null : <Auction auction={auction} />}
    </>
  );
}

export default Index;

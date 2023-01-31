import React from "react";
import Header from "../../components/Header/header";
import Auction from "./Auction";
import GetData from "../../api/getdata";
import MyNavbar from "../../components/navbar";
import { CircularProgressbar } from "react-circular-progressbar";
function Restaurant() {
  const [auctions, setAuctions] = React.useState(null);
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    GetData(`${process.env.REACT_APP_AUCTIONS}`)
      .then((response) => {
        setAuctions(response);
        setloading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <MyNavbar />
      <Header />
      {loading ? <CircularProgressbar /> : <Auction auctions={auctions} />}
    </>
  );
}

export default Restaurant;

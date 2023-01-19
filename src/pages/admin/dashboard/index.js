import React from "react";
import BiddingReport from "../../../components/dashboard/BiddingReport";
import Header from "../../../components/Header/header";
import MyNavbar from "../../../components/navbar";
import { useState } from "react";
import AuctionReport from "../../../components/dashboard/AuctionReport";
import Sellers from "../../../components/dashboard/Sellers";
import Buyers from "../../../components/dashboard/Buyers";
import Products from "../../../components/dashboard/Products";
import GetData from "../../../api/getdata";
function Index() {
  const [biddingReport, setBiddingReport] = useState(false);
  const [auctionReport, setAuctionReport] = useState(false);
  const [sellers, setSellers] = useState(false);
  const [buyers, setBuyers] = useState(false);
  const [products, setProducts] = useState(false);

  return (
    <>
      <MyNavbar />
      <Header />

      <div className="container  my-3">
        <button
          className="btn btn-outline-primary my-3 mx-2"
          onClick={() => {
            setBiddingReport(!biddingReport);
            setAuctionReport(false);
            setSellers(false);
            setBuyers(false);
            setProducts(false);
          }}
        >
          Bidding Report
        </button>
        <button
          className="btn btn-outline-primary my-3 mx-2"
          onClick={() => {
            setAuctionReport(!auctionReport);
            setBiddingReport(false);
            setSellers(false);
            setBuyers(false);
            setProducts(false);
          }}
        >
          Auction Report
        </button>
        <button
          className="btn btn-outline-primary my-3 mx-2"
          onClick={() => {
            setAuctionReport(false);
            setBiddingReport(false);
            setSellers(!sellers);
            setBuyers(false);
            setProducts(false);
          }}
        >
          Sellers
        </button>
        <button
          className="btn btn-outline-primary my-3 mx-2"
          onClick={() => {
            setAuctionReport(false);
            setBiddingReport(false);
            setSellers(false);
            setBuyers(!buyers);
            setProducts(false);
          }}
        >
          Buyers
        </button>
        <button
          className="btn btn-outline-primary my-3 mx-2"
          onClick={() => {
            setAuctionReport(false);
            setAuctionReport(false);
            setSellers(false);
            setBuyers(false);
            setProducts(!products);
          }}
        >
          Products
        </button>
      </div>
      {biddingReport && <BiddingReport />}
      {auctionReport && <AuctionReport />}
      {sellers && <Sellers />}
      {buyers && <Buyers />}
      {products && <Products />}
    </>
  );
}

export default Index;

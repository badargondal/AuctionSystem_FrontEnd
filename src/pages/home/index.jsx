import React from "react";
import Header from "../../components/Header/header";
import Products from "./Home";
import GetData from "../../api/getdata";
import MyNavbar from "../../components/navbar";
import { CircularProgressbar } from "react-circular-progressbar";
function Restaurant() {
  const [products, setProducts] = React.useState(null);
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    GetData(`${process.env.REACT_APP_PRODUCTS}`)
      .then((response) => {
        console.log(response);
        setProducts(response);
        setloading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <MyNavbar />
      <Header />
      {loading ? <CircularProgressbar /> : <Products products={products} />}
    </>
  );
}

export default Restaurant;

import React from "react";
import GetData from "../../../api/getdata";
import MyNavbar from "../../../components/navbar";
import PruchasedProducts from "./PruchasedProducts";

function Index() {
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    GetData(`${process.env.REACT_APP_PRODUCTS}`)
      .then((response) => {
        console.log(response);
        setProducts(response);
        
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <MyNavbar />
      <PruchasedProducts />
    </>
  );
}

export default Index;

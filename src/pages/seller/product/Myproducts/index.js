import React from "react";
import Myproducts from "./Myproducts";
import MyNavbar from "../../../../components/navbar";
import { CircularProgressbar } from "react-circular-progressbar";
import getAuthorizedData from "../../../../api/getAuthorizedData";
import Header from "../../../../components/Header/header";
function Index() {
  const [products, setProducts] = React.useState(null);
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    getAuthorizedData(`/seller/products`)
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
      
      {loading ? <CircularProgressbar /> : <Myproducts products={products} />}
    </>
  );
}

export default Index;

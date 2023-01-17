import React from "react";
import Header from "../../components/Header/header";
import Order from "./Orders";
import GetData from "../../api/getdata";
import MyNavbar from "../../components/navbar";
function Orders() {
  const [order, setorder] = React.useState(null);

  React.useEffect(() => {
    GetData(`${process.env.REACT_APP_ORDERS}`)
      .then((response) => {
        console.log(response);
        setorder(response);
      })
      .catch((e) => console.log(e));
  }, []);

  // if (!order) return null;

  return (
    <>
      <MyNavbar/>
      <Header text={"orders"} />
      {order === null ? null : <Order order={order} />}
    </>
  );
}

export default Orders;

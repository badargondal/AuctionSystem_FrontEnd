import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Auction(props) {
  console.log("props", props.auctions);
  const productsData = props.auctions;

  return (
    <>
      <div className="container">
        <div className="row">
          {productsData.map(
            (item) =>
              item.approved && (
                <div class="col my-5">
                  <Card className="restaurant-card" key={item.productId._id}>
                    <Card.Img variant="top" src={item.productId.imgUrl} />
                    <Card.Body>
                      <Card.Title>{item.productId.title}</Card.Title>
                      <Card.Text>Price : {item.productId.price}</Card.Text>
                      <Card.Text>Date</Card.Text>
                      <Link
                        to={`/product/${item.productId._id}`}
                        state={{ item: item.productId, req: "buy" }}
                      >
                        <button className="btn btn-primary">Buy Now</button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Auction;

import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Products(props) {
  const productsData = props.products;

  return (
    <>
      <div className="container">
        <div className="row">
          {productsData.map((item) => (
            <div class="col my-5">
              <Card className="restaurant-card" key={item._id}>
                <Card.Img variant="top" src={item.imgUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>PKR : {item.price}</Card.Text>
                  <Link to={`/product/${item._id}`} state={{ item: item }}>
                    <button className="btn btn-primary">View Product</button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

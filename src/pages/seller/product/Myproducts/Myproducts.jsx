import React from "react";
import Card from "react-bootstrap/Card";
function Myproducts(props) {
  const productsData = props.products;
  return (
    <>
      <div className="container">
        <div className="row">
          {productsData.map((item) => (
            <div class="col my-5">
              <Card className="restaurant-card" key={item.id}>
                <Card.Img variant="top" src={item.imgUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Myproducts;

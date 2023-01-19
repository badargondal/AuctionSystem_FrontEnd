import axios from "axios";
import React from "react";
import { useState } from "react";
import GetData from "../../api/getdata";
function Products() {
  const [products, setProducts] = useState(null);
  React.useEffect(() => {
    GetData(`${process.env.REACT_APP_PRODUCTS}`)
      .then((response) => {
        console.log(response);
        setProducts(response);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="container my-3">
      <table class="table table-hover thead-dark">
        <thead class="bg-dark">
          <tr class="text-light">
            <th scope="col">Sr.no</th>
            <th scope="col">Title</th>
            <th scope="col">Price </th>
            <th scope="col">Seller Name</th>
            <th scope="col">Product Status</th>
            <th scope="col" className="mx-5">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => (
            <>
              {!item.approved && (
                <tr key={item._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.sellerId.name}</td>
                  <td>{item.status}</td>

                  <td>
                    {" "}
                    <button
                      className="btn btn-outline-primary "
                      onClick={async () => {
                        const response = await axios
                          .delete(
                            `${process.env.REACT_APP_BASE_URL}/admin/products/${item._id}`,
                            {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: localStorage.getItem("token"),
                              },
                            }
                          )
                          .then(
                            (response) => {
                              console.log(response.data.message);
                              alert(response.data.message);
                            },
                            (error) => {
                              console.log(error);
                            }
                          );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;

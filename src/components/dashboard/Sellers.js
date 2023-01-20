import axios from "axios";
import React from "react";
import { useState } from "react";
import GetData from "../../api/getdata";
function Sellers() {
  const [data, setData] = useState(null);
  React.useEffect(() => {
    GetData(`/seller/all`)
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="container my-3">
      <table class="table table-hover thead-dark">
        <thead class="bg-dark">
          <tr class="text-light">
            <th scope="col">Sr.no</th>
            <th scope="col">Name</th>
            <th scope="col">email </th>
            <th scope="col" className="mx-5">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <>
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>

                <td>
                  <button
                    className="btn btn-outline-primary "
                    onClick={async () => {
                      const response = await axios
                        .delete(
                          `${process.env.REACT_APP_BASE_URL}/admin/seller/${item._id}`,
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
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sellers;

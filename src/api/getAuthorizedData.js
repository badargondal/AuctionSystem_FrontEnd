import axios from "axios";
async function getAuthorizedData(props) {
  console.log("url", process.env.REACT_APP_BASE_URL + props);
  const response = await axios.get(process.env.REACT_APP_BASE_URL + props, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  return response.data;
}
export default getAuthorizedData;

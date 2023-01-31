import axios from "axios";
async function getAuthorizedData(props) {
  const response = await axios.get(process.env.REACT_APP_BASE_URL + props, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  return response.data;
}
export default getAuthorizedData;

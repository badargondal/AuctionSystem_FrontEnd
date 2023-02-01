import axios from "axios";
async function GetData(props) {
  const response = await axios.get(process.env.REACT_APP_BASE_URL + props);
  return response.data;
}
export default GetData;

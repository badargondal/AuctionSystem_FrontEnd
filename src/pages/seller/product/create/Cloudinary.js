import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "AuctionSystem");
    formData.append("cloud_name", "dq76y3bfa");
    formData.append("public_id", `${uuidv4()}`);

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dq76y3bfa/image/upload",
        formData
      );
      setLoading(false);
      console.log(res.data.url);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleChange} />
        <button
          onClick={handleUpload}
          className="btn btn-outline-primary btn-sm my-1"
        >
          Upload
        </button>
      </form>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default UploadImage;

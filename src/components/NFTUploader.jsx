import React, { useState } from "react";

export default function NFTUploader() {
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    alert("Upload logic here!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <input type="file" onChange={(e) => setImage(e.target.files[0])} className="block w-full mb-4" />
      <button onClick={handleUpload} className="bg-purple-500 text-white px-4 py-2 rounded">Upload NFT</button>
    </div>
  );
}

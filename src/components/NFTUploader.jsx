import React, { useState } from "react";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const NFTUploader = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [nftName, setNftName] = useState("");
  const [description, setDescription] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
    } catch (err) {
      console.error("Signup failed:", err.message);
    }
  };

  const handleUpload = async () => {
    if (!file || !nftName) return alert("Fill all fields");

    const storageRef = ref(storage, `nfts/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    const nftDoc = doc(db, "nfts", nftName);
    await setDoc(nftDoc, {
      name: nftName,
      description,
      imageUrl: downloadURL,
      uploadedAt: new Date()
    });

    alert("NFT uploaded successfully!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>Create Account</button>

      <hr />
      <h2>Upload NFT</h2>
      <input placeholder="NFT Name" onChange={(e) => setNftName(e.target.value)} /><br />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} /><br />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} /><br />
      <button onClick={handleUpload}>Upload NFT</button>
    </div>
  );
};

export default NFTUploader;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFTUploader from "./components/NFTUploader";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-6 font-sans">
        <h1 className="text-3xl font-bold text-center mb-8">Aenzbi Metaverse NFT Generator</h1>
        <Routes>
          <Route path="/" element={<NFTUploader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

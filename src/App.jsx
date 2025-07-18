import React from "react";
import "./App.css";
import { Slide, ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <React.Suspense
      fallback={
        <div className="h-screen flex justify-center items-center">
          Loading...
        </div>
      }
    >
      <ToastContainer position="top-center" newestOnTop transition={Slide} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/bill" element={<GenerateBill />} /> */}
      </Routes>
    </React.Suspense>
  );
}

export default App;

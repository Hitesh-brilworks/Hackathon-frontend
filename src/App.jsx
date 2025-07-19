import React from "react";
import { Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/Home";
import TailwindTest from "./components/TailwindTest";

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
        <Route path="/tailwind-test" element={<TailwindTest />} />
        {/* <Route path="/bill" element={<GenerateBill />} /> */}
      </Routes>
    </React.Suspense>
  );
}

export default App;

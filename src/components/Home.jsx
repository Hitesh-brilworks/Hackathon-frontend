import { useState } from "react";
import { Button } from "./Button/Button";

const Home = () => {
  const [welcomeText, setWelcomeText] = useState("");
  const handleClick = () => {
    setWelcomeText((prev) =>
      prev === "" ? (
        <h2>
          Welcome <span className="font-bold text-xl">Tantrajñāḥ</span> in
          Hackathon 2025
        </h2>
      ) : (
        ""
      )
    );
  };
  return (
    <div className="w-full flex h-full flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-semibold text-black mb-10">HomePage</h1>
      <Button onClick={handleClick} label="Click Me" className="mb-10" />
      <h2>{welcomeText}</h2>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

const Home = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);
  return (
    <>
      <div className="w-full flex h-screen flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-semibold text-black mb-10">HomePage</h1>
        <Button
          onClick={() => setOpen(true)}
          label="Click Me"
          className="mb-10"
        />
      </div>
      <Modal
        title="Welcome Board"
        open={open}
        close={() => setOpen(false)}
        staticModal={false}
        className="!z-[30]"
        panelClassName="max-w-none text-[20px] !max-w-[767px]"
      >
        <h2 className="text-center py-10">
          Welcome <span className="font-bold text-xl">Tantrajñāḥ</span> in
          Hackathon 2025
        </h2>
        <div className="flex justify-end gap-4 mt-4">
          <Button
            variant="outline-gray"
            label="Cancel"
            onClick={() => setOpen(false)}
          />
          <Button label="Confirm" onClick={() => setOpen(false)} />
        </div>
      </Modal>
    </>
  );
};

export default Home;

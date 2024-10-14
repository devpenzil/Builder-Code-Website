import React, { useState } from "react";
import NavOptions from "./NavOptions";

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-white">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="text-xl">
            Builder <span className="font-semibold">Code</span>
          </div>
          <div className="flex gap-6 items-center">
            <div className="border px-5 py-3 rounded-full border-black cursor-pointer text-lg">
              Get in touch
            </div>
            <div
              className="cursor-pointer text-xl"
              onClick={() => setShowOptions(!showOptions)}
            >
              Menu
            </div>
          </div>
        </div>
      </div>
      {showOptions && <NavOptions close={() => setShowOptions(false)} />}
    </>
  );
}

export default Navbar;

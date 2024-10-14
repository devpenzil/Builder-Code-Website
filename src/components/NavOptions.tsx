import React from "react";

interface Props {
  close: () => void;
}
function NavOptions({ close }: Props) {
  return (
    <div className="fixed top-0 left-0 bg-black w-full h-screen text-white py-20">
      <div className="container mx-auto text-[45px] font-semibold">
        <div>About</div>
        <div>Career</div>
        <div onClick={close} className="cursor-pointer">
          Close
        </div>
      </div>
    </div>
  );
}

export default NavOptions;

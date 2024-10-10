import React from "react";

function Footer() {
  return (
    <div className="w-full py-20 bg-[#010202] text-white">
      <div className="container mx-auto flex justify-between flex-row relative">
        <div>
          <div className="text-[136px] font-semibold">Let’s chat. </div>
          <div className="text-[32px]">
            Unleashing brand potential through creative <br /> design and
            innovation.
          </div>
        </div>
        <div>
          <a
            href="#"
            className="bg-white text-black rounded-full px-10 py-5 text-lg uppercase font-semibold absolute bottom-0 right-0"
          >
            Book a meeting
          </a>
        </div>
      </div>
      <div className="container mx-auto h-[1px] mt-10 w-full bg-[#404145]" />
      <div className="container mx-auto mt-4  text-right">
        <a href="#" className="text-lg font-semibold text-white mr-4">
          Linkedin
        </a>
        <a href="#" className="text-lg font-semibold text-white mr-4">
          Behance
        </a>
        <a href="#" className="text-lg font-semibold text-white mr-4">
          Dribble
        </a>
      </div>
    </div>
  );
}

export default Footer;

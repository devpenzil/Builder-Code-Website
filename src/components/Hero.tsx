import React from "react";

function Hero() {
  return (
    <div className="container mx-auto py-40 h-screen flex flex-col justify-center items-end gap-20 relative">
      <div className="text-[172px] leading-[200px]">
        We plan, Build and Deploy Apps
      </div>
      <div className="text-[32px] w-2/3 text-[#696A6E]">
        We&apos;re not just a design agency; we&apos;re your friendly design
        companions. Let&apos;s embark on this creative adventure together and
        bring your vision to life with a friendly, modern, and innovative touch.
      </div>
      <div className="absolute w-[120px] h-[120px] bg-black bottom-10 rounded-full text-white flex justify-center items-center left-0">
        Scroll
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function Description() {
  return (
    <div className="w-full py-40">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl">
            Digital Agency Based in{" "}
            <span className="underline font-bold">INDIA</span>
          </div>
          <div className="border px-5 py-3 rounded-full border-black cursor-pointer text-lg">
            Get in touch
          </div>
        </div>
        <div className="text-[48px] leading-[l120%] py-20">
          Based in the vibrant heart of Sydney, Australia, Kreativy is not just
          a digital agency; we&apos;re your partners in creativity. Our mission
          is to turn your dreams into reality, one pixel at a time. With a
          diverse team of designers, developers, and innovators, we&apos;re
          constantly pushing the boundaries of what&apos;s possible in the
          digital world.
        </div>
        <div className="text-right underline text-2xl leading-10 ">
          <a href="#">hello@buildercode.com</a> <br />
          <a href="#">+9199999999999</a>
        </div>
      </div>
    </div>
  );
}

export default Description;

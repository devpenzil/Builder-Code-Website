import React from "react";

function Testimonials() {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto">
        <div className="text-[48px] pt-40 text-center leading-[60px]">
          I had the pleasure of working with Ivan on a recent project, and I was
          blown away by their creativity and attention to detail. I highly
          recommend Kreativy for anyone looking for a talented and professional
          designer.
        </div>
        <img
          src="https://picsum.photos/1920/1080"
          className="w-[72px] h-[72px] rounded-full mx-auto mt-20"
          alt=""
        />
        <div className="mx-auto text-[24px] text-center mt-4 ">
          <span className="font-bold">Jacob McDany</span> , CEO of Rackspace
        </div>

        <div className="grid grid-cols-4 gap-10 mt-20 mb-20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
            return (
              <div
                className="bg-slate-200 w-full aspect-square flex justify-center items-center"
                key={index}
              >
                logo
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

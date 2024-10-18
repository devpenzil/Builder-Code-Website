import React from "react";

function ActiveJobs() {
  const data = [
    {
      name: "React Developer",
      url: "",
      desc: "3+ years",
    },
    {
      name: "React native Developer",
      url: "",
      desc: "3+ years",
    },
    {
      name: "Shopify Developer",
      url: "",
      desc: "2+ years",
    },
  ];
  return (
    <div className="container mx-auto py-10">
      {data.map((obj) => {
        return (
          <a href={obj.url} key={obj.name}>
            <div className="flex justify-between border-y-[1px] py-10">
              <div>
                <div className="text-[40px]">{obj.name}</div>
                <div>{obj.desc}</div>
              </div>
              <div>Go</div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default ActiveJobs;

import React from "react";

const Mainlist = () => {
  const dummydata = [
    {
      counts: "1",
      name: "Green Apple",
      update: "21st Oct, 2024",
    },
    {
        counts: "1",
        name: "Green Apple",
        update: "21st Oct, 2024",
      },
      {
        counts: "2",
        name: "Yellow Apple",
        update: "23st Oct, 2024",
      },
      {
        counts: "3",
        name: "Green Banana",
        update: "21st Oct, 2024",
      },
  ];
  return (
    <div className=" mt-3">
      <div className=" flex  text-xs  items-center justify-between">
        <p className="text-gray-500 ">Count</p>
        <p className="text-gray-500 ">Name</p>
        <p className="text-gray-500">Last update</p>
      </div>
      <div className=" overflow-scroll   h-96" >
        {[...dummydata,...dummydata,...dummydata].map((data, index) => (
          <div className=" flex items-center hover:bg-[#202020] transition rounded p-2 text-xs mt-2 justify-between w-full" key={index}>
            <p>{data.counts}x</p>
            <p >{data.name}</p>
            <p>{data.update}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainlist;

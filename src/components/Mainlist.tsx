import prisma from "@/lib/db";
import React from "react";

const Mainlist = async () => {
  const pantry= await prisma.pantry.findMany()

  return (
    <div className=" mt-3">
      <div className=" flex  text-xs  items-center justify-between">
        <p className="text-gray-500 ">Count</p>
        <p className="text-gray-500 ">Name</p>
        <p className="text-gray-500">Last update</p>
      </div>
      <div className=" overflow-scroll   h-96" >
        {pantry.map((data, index) => (
          <div className=" flex items-center hover:bg-[#202020] transition rounded p-2 text-xs mt-2 justify-between w-full" key={index}>
            <p>1x</p>
            <p >{data.title}</p>
            <p>{data.updated.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainlist;

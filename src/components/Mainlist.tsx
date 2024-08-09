import { deletepost } from "@/actions/actions";
import prisma from "@/lib/db";
import React from "react";
import { CiCircleRemove } from "react-icons/ci";

const Mainlist = async () => {
  const pantry= await prisma.pantry.findMany()
  const headers=["Count"," Name","Last Update","Delete"]
  return (
    <div className=" mt-3">
      <div className=" flex  text-xs  items-center justify-between">
        {headers.map((data,index)=>(
          <p key={index} className="text-gray-500 ">{data}</p>
        ))}
      </div>
      <div className=" overflow-scroll  h-96" >
        {pantry.map((data, index) => (
          <div className=" flex items-center px-2  hover:bg-[#202020] transition rounded py-2 text-xs mt-2 justify-between w-full" key={index}>
            <p>1x</p>
            <p >{data.title}</p>
            <p>{data.updated.toLocaleString()}</p>
            <form action={deletepost} className=" text-lg">
              <input type="hidden" name="id" value={data.id} />
              <button className=" transition bg-[#1E1E1E]  p-1 rounded-md duration-300 ease-in-out transform hover:scale-110 active:animate-pulse">
  <CiCircleRemove />
</button></form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainlist;

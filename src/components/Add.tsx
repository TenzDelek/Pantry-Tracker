'use client'
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Popup from "./popup";
const Add = () => {
  const [stateofclick,setstateofclick]=useState(false)
  const handleclick=()=>{
    setstateofclick(true)
  }
  const handleClosePopup=()=>{
    setstateofclick(false)
  }
  return (
    <div>

    <button onClick={handleclick}>
      <div className=" p-2 mt-2 bg-[#1E1E1E] rounded hover:bg-[#2f2f2f] transition cursor-pointer">
        <IoIosAdd />
      </div>
    </button>
    {stateofclick && <Popup onClose={handleClosePopup}/>}
    </div>
  );
};

export default Add;

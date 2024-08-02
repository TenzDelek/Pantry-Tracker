"use client"

import { useState } from "react"

const Category = () => {
    const dummy = ["fruit", "food", "dry"];
    const [bgStates, setBgStates] = useState(Array(dummy.length).fill(false));

    const handleClick = (index:number) => {
        const newBgStates = [...bgStates];
        newBgStates[index] = !newBgStates[index];
        setBgStates(newBgStates);
    }

    return (
        <div className='mt-3 w-full flex space-x-2 overflow-scroll'>
            {dummy.map((data, index) => (
                <div 
                    onClick={() => handleClick(index)} 
                    className={`w-fit px-2 py-1 cursor-pointer  transition rounded text-xs ${bgStates[index] ? "bg-green-700 hover:bg-green-500" : "bg-[#202020] hover:bg-[#303030]"}`} 
                    key={index}
                >
                    {data}
                </div>
            ))}
        </div>
    )
}

export default Category;

import Add from "@/components/Add";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import logo from "../../public/headstarter.png"
import Category from "@/components/Category";
import Mainlist from "@/components/Mainlist";
export default function Home() {
  return (
    <div className=" h-screen bg-black p-4 flex-col items-center justify-center w-full flex">
      <div className=" h-screen bg-[#0E0E0E]  w-[480px] rounded-md p-6">
        <div className=" flex items-center justify-between">
          <p className=" text-xs mb-4">
            <span className=" text-green-500 text-xl font-bold">Pantry</span> A
            better way to manage your Shopping cart
          </p>
          <Link
          className=" p-2 hover:bg-[#202020] transition rounded"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TenzDelek/Pantry-Tracker"
          >
            <FaGithub />
          </Link>
        </div>
        <p className="flex items-center text-xs mb-4">
          A web app build during <Image className=" mx-2 p-1 hover:bg-[#202020] transition rounded" alt="logo of headstarter" src={logo} height={25} width={25} placeholder="blur"/> HeadStarter Fellowship
        </p>
        <div className=" flex items-center gap-2">
        <Search/>
        <Add/>
        </div>
        <Category/>
        <Mainlist/>
      </div>
    </div>
  );
}

{
  /* <div className=" bg-slate-800 text-center rounded-t-md w-[480px] p-2 text-white">Pantry Item</div>
      <div className=" shadow-lg h-52 w-[480px] p-4 border space-y-2 overflow-auto ">
       {data.charAt(0).toUpperCase()+data.slice(1)}
      </div> */
}

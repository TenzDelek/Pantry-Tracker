"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  const search = useSearchParams();
  const [searchqueies, setsearchqueries] = useState<string | null>(
    search ? search.get("q") : ""
  );;
  const router = useRouter();
  const onsearch=(e:React.FormEvent)=>{
    e.preventDefault()
    if (typeof searchqueies !== "string") return
    const encodedstring = encodeURI(searchqueies)
    router.push(`/search?q=${encodedstring}`)
    console.log(encodedstring)
    console.log(searchqueies)
  }
  return (
    <div className="flex items-center gap-4 text-gray-300 w-60 px-2 py-1  bg-[#1E1E1E] rounded ">
      <IoIosSearch />
      <form onSubmit={onsearch}>
        <input
          value={searchqueies || ""}
          onChange={(e) => setsearchqueries(e.target.value)}
          placeholder="Search for items"
          className=" bg-[#1E1E1E] text-xs outline-none w-full"
        />
      </form>
    </div>
  );
};

export default Search;

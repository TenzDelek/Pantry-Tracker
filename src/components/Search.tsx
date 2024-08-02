import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className='flex items-center gap-4 text-gray-300 w-60 px-2 py-1  bg-[#1E1E1E] rounded '>
        <IoIosSearch/>
        <form>
    <input placeholder="Search for items" className=" bg-[#1E1E1E] text-xs outline-none w-full"/>
        </form>
        </div>
  )
}

export default Search
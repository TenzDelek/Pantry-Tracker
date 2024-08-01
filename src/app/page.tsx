import Image from "next/image";

export default function Home() {
  const pantry = ["food1", "food2", "food3","food4"];
  const pass='tenzde3494lek'
  return (
    <div className=" h-screen flex-col items-center justify-center w-full flex">
      <div className=" bg-slate-800 text-center rounded-t-md w-[480px] p-2 text-white">Pantry Item</div>
      <div className=" shadow-lg h-52 w-[480px] p-4 border space-y-2 overflow-auto ">
        {[...pantry, ...pantry, ...pantry].map((data, index) => (
          <p
            className=" bg-black p-2 rounded text-center text-white"
            key={index}
          >
            {/* capitalize 0th one and then slice(cut one from left) rest will be print */}
            {data.charAt(0).toUpperCase()+data.slice(1)}
          </p>
        ))}
      </div>
    </div>
  );
}

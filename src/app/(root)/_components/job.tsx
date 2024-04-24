import { CiLocationOn } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";


export const Job = () => {
  return(
    <div className="rounded-[12px] border-[1px] transition duration-150 ease-in-out hover:border-black p-8 flex justify-between mb-2">
      <div className="flex">
        <h2>Company</h2>
        <div className="flex-col ml-3">
          <h3>IT & Networking</h3>
          <h2>React Developer</h2>
        </div>
      </div>
      <div className="flex items-center">
        <CiLocationOn style={{ fontSize: 24 }} />
        <h3 className="ml-1">398 Manhattan Ave</h3>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center">
          <RiMoneyDollarCircleLine style={{ fontSize: 18 }} />
          <h3 className="ml-1">$800 - $900 / week</h3>
        </div>
        <div className="flex">
          <h4 className="rounded-md bg-gray-100 py-1 px-3 mr-1 text-[12px]">React</h4>
          <h4 className="rounded-md bg-gray-100 py-1 px-3 mr-1 text-[12px]">React Native</h4>
          <h4 className="rounded-md bg-gray-100 py-1 px-3 text-[12px]">JavaScript</h4>
        </div>
      </div>
      <div className="flex items-center">
        <FaHeart className="text-red-300" />
        <button>Apply</button>
      </div>
    </div>
  )
}
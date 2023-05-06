import Image from "next/image"
import { AiOutlineSearch } from 'react-icons/ai';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { BsSquareFill, BsFillCircleFill } from 'react-icons/bs';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

const Navbar = ({ setSignup }) => {
  return (
    <>
      <div className='hidden md:flex justify-around items-center py-4 px-3'>
        <div className="flex justify-center w-1/4">
          <Image src={'/logo.png'} alt="logo" width={160} height={40} />
        </div>
        <div className="flex justify-center w-1/2">
          <AiOutlineSearch className="relative top-2.5 left-8 text-xl text-gray-500" />
          <input type="search" className="px-9 outline-none bg-gray-100 py-2 rounded-full text-black w-[70%]" placeholder="Search for your favorite group in ATG" />
        </div>
        <div className="flex w-1/4 items-center">
          <p>Create Account</p>
          <button className="text-blue-500 font-bold ml-3" onClick={() => { setSignup(true) }}>It's free!</button>
          <RiArrowDropDownFill className="text-3xl" />
        </div>
      </div>

      <div className="md:hidden flex justify-end py-4 px-3 space-x-4 text-gray-500 text-lg">
        <BsSquareFill /><BsFillCircleFill />
        <button onClick={() => { setSignup(true) }}>
          <TbTriangleInvertedFilled />
        </button>
      </div>
    </>
  )
}

export default Navbar
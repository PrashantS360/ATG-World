import Head from 'next/head'
import Image from 'next/image'
import { RiArrowDropDownFill } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';
import { MdOutlineGroupAdd } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import { RiErrorWarningLine } from 'react-icons/ri';
import { TbHandRock } from 'react-icons/tb';
import { AiTwotoneLike } from 'react-icons/ai';
import Card from '../components/Card';
import { useState } from 'react';

export default function Home({signup, setSignup}) {
  const [login, setLogin] = useState(false);

  return (
    <div className=''>
      <Head >
        <title>ATG.World</title>
        <meta name="description" content="CodesWear.com - Wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-center '>
        <Image src='/home.jpg' alt='background' priority height={700} width={2000} />
        <div className='relative text-white -top-28 left-1 md:-top-60 md:left-32 z-40 flex px-20 items-start flex-col'>
          <h2 className='md:text-3xl text-xl font-bold'>Computer Engineering</h2>
          <span className='text-xs md:text-sm'>
            142,765 Computer Engineers follow this
          </span>
        </div>
      </div>

      <main className='md:w-[80%] m-auto md:px-2 my-4 '>
        {/* <div id='secondNav'> */}
          <nav className='sticky top-0 z-30 bg-white md:flex hidden justify-between items-center border-b-2 border-gray-300 pb-2 pt-3'>
            <div className='px-2'>
              <ul className='flex space-x-4 items-center'>
                <li className=''>All Posts(32)</li>
                <li className='text-gray-500'>Article</li>
                <li className='text-gray-500'>Event</li>
                <li className='text-gray-500'>Education</li>
                <li className='text-gray-500'>Job</li>
              </ul>
            </div>
            <div className='flex space-x-2'>
              <button className='flex bg-gray-200 px-2 outline-none rounded-md pt-1.5 text-center font-[600]'>Write a Post <RiArrowDropDownFill className="text-3xl -mr-2" /></button>
              <button className='flex text-white space-x-2 bg-blue-600 px-2 py-1 rounded-md items-center'><span className='text-white'><MdOutlineGroupAdd /></span> <span>Join Group</span> </button>
            </div>
          </nav>
          <nav className='md:hidden flex px-5 items-center justify-between sticky top-0 bg-white'>
            <h2 className='font-bold bg-white z-30'>Posts(368)</h2>
            <button className='bg-gray-100 px-3 py-1 rounded-lg space-x-2 flex items-center'><span>Filter : All </span><RiArrowDropDownFill /></button>
          </nav>
        {/* </div> */}






        <div className={`modal ${(signup || login)?"flex":"hidden"} z-50 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden justify-center md:items-center items-end overflow-y-auto bg-[rgba(0,0,0,0.4)]`}>
          <div className="modal-dialog relative pointer-events-none w-fit sm:min-w-[500px] md:max-w-[50vw] h-[60vh]"  >
            <div className="modal-content border-none shadow-lg relative flex flex-col  pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current ">
              <div className="relative bg-white rounded-lg shadow">
                <button type="button" className="absolute -top-8 text-white right-0 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="authentication-modal" onClick={()=>{setSignup(false); setLogin(false)}}>
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="mb-6">
                  <p className='flex justify-evenly space-x-2 bg-green-100 px-3 py-3 rounded-t-lg'> <span className='flex text-green-600 justify-center w-full font-[500] text-sm'> Let&apos;s learn, share and inspire each other with our passion for computer engineering. Sign up now<TbHandRock className=' text-orange-300' /></span></p>
                </div>

                <div className='flex px-5 my-2'>
                  <div className='md:w-[60%] w-full'>
                    <h3 className='text-xl my-2 font-bold'>{signup?"Create Account":"Sign In"}</h3>
                    <form action="">
                      {signup && <div className="flex ">
                        <input type="text" className='py-2 px-2 bg-slate-100 outline-none border-2 border-gray-300 w-[45%]' placeholder='First Name' />
                        <input type="text" className='py-2 px-2 bg-slate-100 outline-none border-2 border-l-0 w-[45%] border-gray-300' placeholder='Last Name' />
                      </div>}
                      <input type="email" className='py-2 px-2 bg-slate-100 outline-none border-2 border-gray-300 w-[90%]' placeholder='Email' />
                      <div className='w-full flex'>
                      <input type="password" className='py-2 px-2 bg-slate-100 outline-none border-2 border-gray-300 w-[90%]' placeholder='Password' />
                      <AiOutlineEye className='relative right-6 top-3 text-gray-600'/>
                      </div>
                      {signup && <input type="password" className='py-2 px-2 bg-slate-100 outline-none border-2 border-gray-300 w-[90%]' placeholder='Current Password' />}
                      <div className='flex space-y-3 my-3 flex-col justify-center'>
                        <div className='md:block flex justify-around'>
                        <button className='md:w-[90%] w-[40%] bg-blue-600 text-white py-2
                         rounded-full'> Create Account</button>
                         <div className='md:hidden underline text-gray-500'>or,
                         {signup?<span className='text-gray-500 underline cursor-pointer' onClick={()=>{setLogin(true);setSignup(false)}}>Sign In</span>:<span className='text-gray-500 cursor-pointer underline' onClick={()=>{setLogin(false);setSignup(true)}}>Create new for free!</span>}
                         </div>
                         </div>
                        <button className='py-1 border-2 border-gray-300 w-[90%] rounded-lg flex items-center justify-center space-x-2'>
                          <Image width={20} height={20} src="/facebook.png" alt="facebook logo" /> <span>Sign {signup?"up":"in"} with Facebook</span> 
                        </button>
                        <button className='py-1 border-2 border-gray-300 w-[90%] rounded-lg flex items-center justify-center space-x-2'>
                          <Image width={20} height={20} src="/google.png" alt="google logo" /> <span>Sign {signup?"up":"in"} with Google</span> 
                        </button>
                        {login && <span className='text-center'>
                          Forgot Password?
                        </span>}
                        {signup?<p className='text-xs md:hidden mt-4'>By signing up, you agree to our Terms & Conditons, Privaciy policy</p>:""}
                      </div>
                    </form>
                  </div>
                  <div className='hidden my-2 md:flex flex-col items-end'>
                    <p className='text-sm mb-4'>{signup?"Already have an account?  ":"Don't have an account yet? "}{signup?<button className='text-blue-600' onClick={()=>{setLogin(true);setSignup(false)}}>Sign In</button>:<button className='text-blue-600' onClick={()=>{setLogin(false);setSignup(true)}}>Create new for free!</button>}</p>
                    <Image src={'/welcome.png'} width={400} height={300} alt='welcome' />
                    {signup?<p className='text-xs mt-4'>By signing up, you agree to our Terms & Conditons, Privaciy policy</p>:""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='md:px-2 flex justify-between'>
          <div className='md:w-2/3 w-full'>
            <Card imgLink={'/card1.png'} content={"I've worked in UX for a better part of decade. From now on I plan to receive....."} type="Article" heading="What if famous brands have regular fonts? Meet RegulaBrands!" author={"Prashant Singh"} authorDp={'/dp.png'} views={"1.4k views"} />
            <Card imgLink={'/card2.png'} content={"I've worked in UX for a better part of decade. From now on I plan to receive....."} type="Article" heading="What if famous brands have regular fonts? Meet RegulaBrands!" author={"Prashant Singh"} authorDp={'/dp2.png'} views={"1.4k views"} />
            <Card imgLink={'/card3.png'} content={"I've worked in UX for a better part of decade. From now on I plan to receive....."} type="Article" heading="What if famous brands have regular fonts? Meet RegulaBrands!" author={"Prashant Singh"} authorDp={'/dp3.png'} views={"1.4k views"} />
          </div>
          <div className='md:w-1/3 hidden md:block' id='suggestion'>
            <div className=' flex items-center mr-4 my-12 border-b-2 border-gray-400'>
              <GoLocation className='' />
              <input type="text" className='w-full px-3 py-2 outline-none' placeholder='Enter your location' />
              <RxCross2 className='text-2xl' />
            </div>
            <div className='text-gray-500 flex items-center space-x-2 my-12'><RiErrorWarningLine />
              <p className='text-[0.81rem]'>Your location will help us to serve better and extend a personal expericence</p>
            </div>

            <div>
              <h2 className='flex items-center text-xl space-x-4 my-6 text-gray-600' ><AiTwotoneLike /> <span> Recommended Groups</span></h2>

              <div className='flex justify-between items-center my-4'>
                <div className='flex items-center space-x-2'>
                  <Image src={'/dp.png'} className='rounded-full' width={40} height={40} alt='dp' />
                  <p>Leisure</p>
                </div>

                <button className='text-sm bg-black text-white px-3 py-1 rounded-lg'>Followed</button>
              </div>
              <div className='flex justify-between items-center my-4'>
                <div className='flex items-center space-x-2'>
                  <Image src={'/dp2.png'} className='rounded-full' width={40} height={40} alt='dp' />
                  <p>Activism</p>
                </div>

                <button className='text-sm bg-slate-100 px-3 py-1 rounded-lg'>Follow</button>
              </div>
              <div className='flex justify-between items-center my-4'>
                <div className='flex items-center space-x-2'>
                  <Image src={'/dp3.png'} className='rounded-full' width={40} height={40} alt='dp' />
                  <p>MBA</p>
                </div>

                <button className='text-sm bg-slate-100 px-3 py-1 rounded-lg'>Follow</button>
              </div>
              <div className='flex justify-between items-center my-4'>
                <div className='flex items-center space-x-2'>
                  <Image src={'/dp4.png'} className='rounded-full' width={40} height={40} alt='dp' />
                  <p>Philosophy</p>
                </div>

                <button className='text-sm bg-slate-100 px-3 py-1 rounded-lg'>Follow</button>
              </div>

              <button className='text-blue-600 float-right text-xs my-4'>See More..</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

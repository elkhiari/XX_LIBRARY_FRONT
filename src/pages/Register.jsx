import React, { useEffect, useState } from 'react'
import { BiMaleSign,BiFemaleSign } from "react-icons/bi";
import { Link } from 'react-router-dom'



function Register() {
  const [file, setFile] = useState(null)
  const [avatar, setAvatar] = useState("https://raw.githubusercontent.com/elkhiari/feeds_app_front/main/src/user.png")
  const [gender, setGender] = useState()
  useEffect(() => {
    if(file){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setAvatar(reader.result);
      reader.onerror = error => console.log(error);
    }
  }, [file])
  return (
    <div>
<div className="bg-grey-lighter min-h-screen flex flex-col syne text-sm 2xl:text-base pt-14 pb-14">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className=" px-6 py-8 rounded  w-full">
                    <h1 className="mb-8 text-3xl text-center font-extrabold">Sign up</h1>
                    <div className='mb-4'>
                      <label htmlFor="file">
                        <img src={avatar} className='w-36 mx-auto h-36 bg-blue-300 mb-2 p-[1px] hover:scale-105 duration-150 ease-in-out cursor-pointer rounded-full' alt='' />
                        <p className='text-center text-sm text-gray-500'>Choose your photo</p>
                      </label>
                      <input type='file'  name='file' id='file' onChange={(e)=>setFile(e.target.files[0])} className='hidden'/>
                    </div>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <div className="flex justify-around mb-4 place-items-center">
                      <label htmlFor="">
                        Gender:
                      </label>
                        <BiMaleSign onClick={()=>setGender("male")} className={(gender === "male"?"border-4 border-dotted border-red-600":"")+'text-sm cursor-pointer p-3 w-[50px] bg-blue-400 duration-150 ease-out hover:scale-105 h-[50px] rounded-full' }/>
                        
                        <BiFemaleSign onClick={()=>setGender("Female")} className={(gender === "Female"?"border-4 border-dotted border-red-600":"")+'text-sm cursor-pointer p-3 w-[50px] bg-pink-400 duration-150 ease-out hover:scale-105 h-[50px] rounded-full'}/>
                    </div>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-400  hover:bg-blue-600 hover:tracking-widest  duration-150 ease-in-out hover:scale-105 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue-400 text-blue ml-3 hover:font-bold hover:text-blue-600 duration-300  scale-105" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>

    </div>
  )
}

export default Register
import React, { useContext, useEffect, useState } from 'react'
import { BiMaleSign,BiFemaleSign } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';



function Register() {
  const [file, setFile] = useState(null)
  const [avatar, setAvatar] = useState("https://raw.githubusercontent.com/elkhiari/feeds_app_front/main/src/user.png")
  const [gender, setGender] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [name, setName] = useState()
  const {register,setRegisterError,registerError,loading} = useContext(AuthContext);
  useEffect(() => {
    document.title = "Register"
  }, [])
  useEffect(() => {
    if(file){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setAvatar(reader.result);
      reader.onerror = error => console.log(error);
    }
  }, [file])
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email || !password || !name || !gender || !confirmPassword) return setRegisterError("Please fill all the fields");
    if(!/^[a-zA-Z]{3,}(?: [a-zA-Z]+){1,}$/.test(name)) return setRegisterError("Please enter your full name");
    if(!/\S+@\S+\.\S+/.test(email)) return setRegisterError("Please enter a valid email address");
    if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) return setRegisterError("Password must have at least one number, one lowercase and one uppercase letter and at least 8 characters");
    if(password !== confirmPassword) return setRegisterError("Passwords don't match");
    setRegisterError(null)
    console.log(avatar)
    register(email, password, name , gender, avatar);
  }
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col syne text-sm 2xl:text-base pt-14 pb-14">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
                <div className=" px-6 py-8 rounded  w-full">
                    <h1 className="mb-8 text-3xl text-center font-extrabold">Sign up</h1>
                    <div className='mb-4'>
                      <label htmlFor="file">
                        <img src={avatar} className='w-36 mx-auto object-cover h-36 bg-blue-300 mb-2 p-[1px] hover:scale-105 duration-150 ease-in-out cursor-pointer rounded-full' alt='' />
                        <p className='text-center text-sm text-gray-500'>Choose your photo</p>
                      </label>
                      <input type='file'  name='file' id='file' onChange={(e)=>setFile(e.target.files[0])} className='hidden'/>
                    </div>
                    <input
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:text-black"
                        name="fullname"
                        placeholder="Full Name" />

                    <input
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:text-black"
                        name="email"
                        placeholder="Email" />

                    <input
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:text-black"
                        name="password"
                        placeholder="Password" />
                    <input 
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:text-black"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <div className="flex justify-around mb-4 place-items-center">
                      <label htmlFor="">
                        Gender:
                      </label>
                        <BiMaleSign onClick={()=>setGender("male")} className={(gender === "male"?"border-4 border-dashed ":"")+'text-sm border-white dark:border-gray-900 cursor-pointer p-3 w-[50px] bg-blue-400 duration-150 ease-out hover:scale-105 h-[50px] rounded-full' }/>
                        
                        <BiFemaleSign onClick={()=>setGender("Female")} className={(gender === "Female"?"border-4 border-dashed ":"")+'border-white dark:border-gray-900 text-sm cursor-pointer p-3 w-[50px] bg-pink-400 duration-150 ease-out hover:scale-105 h-[50px] rounded-full '}/>
                    </div>
                    {registerError && 
                            <div id="alert-2" className="flex duration-200 p-4 mb-4 text-red-800 rounded bg-red-50 dark:bg-gray-800 dark:text-red-400">
                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Info</span>
                                <div className="ml-3 text-sm font-medium">
                                    {registerError}
                                </div>
                                <button
                                onClick={() => setRegisterError('')}
                                 type="button" 
                                 className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        }  

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-400  hover:bg-blue-600 hover:tracking-widest  duration-150 ease-in-out hover:scale-105 text-white hover:bg-green-dark focus:outline-none my-1"
                    >
                      {loading === false?"Create Account":
                        <div className="flex justify-center">
                          <svg class="w-8 h-8 animate-spin text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4.75V6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M17.1266 6.87347L16.0659 7.93413" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M19.25 12L17.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M17.1266 17.1265L16.0659 16.0659" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12 17.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7.9342 16.0659L6.87354 17.1265" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6.25 12L4.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7.9342 7.93413L6.87354 6.87347" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                      }
                    </button>
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
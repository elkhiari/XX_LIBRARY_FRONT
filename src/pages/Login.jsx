import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Login() {
  return (
    <div>
<div className="bg-grey-lighter min-h-screen flex flex-col syne  text-sm 2xl:text-base">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className=" px-6 py-8 rounded  w-full">
                    <h1 className="mb-8 text-3xl text-center font-extrabold">Sign in</h1>
    
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
                    

                    

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-400  hover:bg-blue-600 hover:tracking-widest  duration-150 ease-in-out hover:scale-105 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Sign in</button>
                </div>

                <div className="text-grey-dark mt-6">
                    I don't have an account? 
                    <Link className="no-underline border-b border-blue-400 text-blue ml-3 hover:font-bold hover:text-blue-600 duration-300  scale-105" to="/register">
                        Create an account
                    </Link>.
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login
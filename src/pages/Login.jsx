import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'



function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login,setLoginError,loginError } = useContext(AuthContext)
    
    const HandleLogin = () => {
        if(!email || !password) return( setLoginError('Please fill in all fields'))
        if(!email.includes('@')) return (setLoginError('Please enter a valid email'))
        if(password.length < 6) return setLoginError('Password must be at least 6 characters')
        login(email, password)
    }
    useEffect(() => {
        document.title = "Login"
    }, [])


  return (
    <div>
<div className="bg-grey-lighter min-h-screen flex flex-col syne  text-sm 2xl:text-base">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className=" px-6 py-8 rounded  w-full">
                    <h1 className="mb-8 text-3xl text-center font-extrabold">Sign in</h1>
    
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="email"
                        placeholder="Email" />

                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className={"block border dark:text-black border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"}
                        name="password"
                        placeholder="Password" />
                        {loginError && 
                            <div id="alert-2" className="flex duration-200 p-4 mb-4 text-red-800 rounded bg-red-50 dark:bg-gray-800 dark:text-red-400">
                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Info</span>
                                <div className="ml-3 text-sm font-medium">
                                    {loginError}
                                </div>
                                <button
                                onClick={() => setLoginError('')}
                                 type="button" 
                                 className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        }  
                    <button
                        onClick={HandleLogin}
                        type="button"
                        className="w-full text-center  py-3 rounded bg-blue-400  hover:bg-blue-600 hover:tracking-widest  duration-150 ease-in-out hover:scale-105 text-white hover:bg-green-dark focus:outline-none my-1"
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
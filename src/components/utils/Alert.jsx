import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Alert({error,setError}) {
    const {typeError,setTypeError} = useContext(AuthContext)
  return (
    <>
      <div  className="flex p-4 place-content-center  md:place-content-center place-items-center w-full" >
      <div  className={`flex p-4 mb-4 ${typeError === "red"?"text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800":"text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800 "} border-t-4    `} >
      <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <div className="ml-3 text-sm font-medium ">
       {error}
      </div>
      <button onClick={()=>{
        setError("")
        setTypeError("")
    }} type="button" className={`ml-auto -mx-1.5 -my-1.5 ${typeError === "red"?"bg-red-50 text-red-500 focus:ring-red-400 dark:text-red-400 hover:bg-red-200":"bg-green-50 text-green-500 focus:ring-green-400 dark:text-green-400 hover:bg-green-200"} rounded-lg focus:ring-2  p-1.5  inline-flex h-8 w-8 dark:bg-gray-800  dark:hover:bg-gray-700`} >
        <span className="sr-only">Dismiss</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      </div>
      </div>
    </>
  )
}

export default Alert
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Alert({error,setError}) {
  // const {error,setError} = useContext(AuthContext)
  const ClearError = () => {
    setError("")
  }
  return (
    <>
      <div  className={`${error === null?"hidden":"flex"} p-4 mb-4 rounded-lg  backdrop-blur-sm bg-gray-800/50 text-white w-[300px] h-[300px] place-content-center place-items-center`} role="alert">
        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">
          {error} 
          {/* <a href="#" className="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like. */}
        </div>
          <button type="button" onClick={ClearError} className="ml-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2  p-1.5  inline-flex h-8 w-8 bg-red-600 text-white-400 hover:bg-red-700 absolute top-0 right-0" data-dismiss-target="#alert-1" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </>
  )
}

export default Alert
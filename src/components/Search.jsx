import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {GiArchiveResearch} from 'react-icons/gi'
import { AuthContext } from '../contexts/AuthContext'

function Search() {
    const {token}  = useContext(AuthContext)
  return (
    
        <section className="syne">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                {!token && <Link to="/register" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                    <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-xm  font-medium">Join our book-sharing community </span> 
                    <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </Link>}
                <h1 className="mb-4 t text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to the XX Library. All books are free</h1>
                <p className="mb-8 text-md font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Welcome to our book-sharing community! Share your favorite books with everyone and embark on a collective reading journey. Discover new literary gems.</p>
                <div className="w-full max-w-md mx-auto">   
                    <label for="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            
                            <GiArchiveResearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <input type="text" id="default-text" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Book here..." required />
                        <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default Search
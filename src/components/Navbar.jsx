import React, { useContext } from 'react'
import logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { MdOutlineLightMode,MdOutlineDarkMode } from "react-icons/md";

function Navbar() {
    const {toggleDarkMode, darkMode,token} = useContext(AuthContext)
  return (
    <div>

            <nav className="bg-white border-gray-200 dark:bg-gray-900 absolute w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center syne">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">XX Library</span>
                </Link>
                <div className="flex items-center md:order-2">
                    {token && <Link to={"/profile"} className="flex mr-3 text-sm bg-gray-800 rounded-full  focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://raw.githubusercontent.com/elkhiari/feeds_app_front/main/src/user.png" alt="user photo" />
                    </Link>}
                    <button type="button" onClick={toggleDarkMode} className="flex mr-3 text-sm dark:bg-gray-800 bg-gray-200 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        {darkMode !== 'dark'?<MdOutlineLightMode className="w-8 h-8 p-1 rounded-full" />:<MdOutlineDarkMode className="w-8 h-8 p-1 rounded-full" />}
                    </button>
                </div>
            </div>
            </nav>

    </div>
  )
}

export default Navbar
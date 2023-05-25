import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/Logo.png';
import { Link, useResolvedPath } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { MdOutlineLightMode,MdOutlineDarkMode } from "react-icons/md";

function Navbar() {
    const {toggleDarkMode, darkMode,token,user} = useContext(AuthContext)
    const path = useResolvedPath();
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
  return (
    <div>
        <nav className={`${path.pathname === '/'?(scrollTop === 0?"bg-blue-50 dark:bg-blue-900  shadow-sm":""): (scrollTop === 0?'bg-white dark:bg-gray-900 border-gray-200':"")}   fixed w-full top-0 z-50 backdrop-blur-sm duration-150`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center syne">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">XX Library</span>
                </Link>
                <div className="flex items-center md:order-2">
                    {token && <Link to={"/profile"} className="flex mr-3 text-sm bg-gray-800 rounded-full  focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src={user.avatar} alt="user photo" />
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
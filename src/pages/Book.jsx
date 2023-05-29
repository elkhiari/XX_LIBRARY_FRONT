import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaBook, FaBookOpen, FaHeart, FaRegHeart } from 'react-icons/fa';
import {FcLike} from 'react-icons/fc';
import Loading from '../components/utils/Loading';

function Book() {
    const [book,setBook] = useState([])
    const [show,setShow] = useState(false)
    const [loading,setLoading] = useState(false)
    const {id} = useParams();
    const getBook = async () => {
        try {
            setLoading(true)
            const response = await axios.get(process.env.REACT_APP_API_URL + '/books/book/'+id);
            setBook(response.data.books);
            setLoading(false)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getBook();
    },[])
    const handleLike = async () => {
        try {
            const response = await axios.put(process.env.REACT_APP_API_URL + '/books/book/'+id);
            getBook();
        }
        catch (error) {
            console.log(error);
        }
    }


  return (
    <div className='w-full min-h-screen  place-content-center place-items-center flex syne duration-200'>
        {loading?<Loading />:<>{book && 
        <div className="container px-2 min-h-screen  2xl:p-16 space-y-4 ">
            <div className='md:flex mt-24 space-y-8 md:space-y-0  bg-gray-400/30 shadow p-4 rounded w-full'>
                <div className="md:w-1/3">
                    <img src={book.cover} className="w-full rounded-md"/>
                </div>
                <div className="max-w-1/3">
                    <h1 className="text-xl font-bold px-3  max-w-3xl md:text-2xl lg:text-3xl">{book.title}</h1>
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td className=" font-bold px-3 flex place-items-start py-3">Author</td>
                                <td className="text-gray-500 py-3 dark:text-gray-300"><span className=' font-bold'>:</span> {book.author}</td>
                            </tr>
                            <tr>
                                <td className=" font-bold px-3 flex place-items-start py-3">Publisher</td>
                                <td className="text-gray-500 py-3 dark:text-gray-300"><span className=' font-bold'>:</span> {book.publisher?.name}</td>
                            </tr>
                            <tr>
                                <td className=" font-bold px-3 flex place-items-start py-3">Published</td>
                                <td className="text-gray-500 py-3 dark:text-gray-300"><span className=' font-bold'>:</span> {book.published_at?.split("T")[0]}</td>
                            </tr>
                            <tr>
                                <td className=" font-bold px-3 flex place-items-start py-3">Pages</td>
                                <td className="text-gray-500 dark:text-gray-300"><span className=' font-bold'>:</span> {book.pages}</td>
                            </tr>
                            <tr>
                                <td className=" font-bold px-3 flex place-items-start py-3">category</td>
                                <td className="text-gray-500 dark:text-gray-300"><span className=' font-bold'>:</span> {book.categories?.name}</td>
                            </tr>
                        </tbody>
                    </table>
                            <div className='w-full p-4'>
                                {/* <td className=" font-bold px-3 flex place-items-start py-3">Publisher</td>
                                <td className="text-gray-500"><span className=' font-bold'>:</span> {book.publisher?.name}</td> */}
                                    <Link to={"/profile/"+book.publisher?._id} className='bg-white dark:bg-gray-700 space-x-10  flex justify-around place-items-center rounded p-4 shadow'>
                                        <img src={book.publisher?.avatar} className="w-20 rounded-md"/>
                                        <h1 className='text-center font-bold'>{book.publisher?.name}</h1>
                                    </Link>
                            </div>
                                <div className='w-full p-4 '>
                                <button onClick={handleLike}  className='bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-500 duration-200 hover:scale-105 hover:bg-blue-600 text-white w-full rounded p-4 shadow flex place-content-center space-x-5 place-items-center'>
                                     <FcLike className='w-10 h-10 text-green-700'/><span className='text-xl font-bold'>{book.downloads}</span>
                                </button>
                            </div>

                </div>
            </div>
            <div className='col-span-full flex'>
                <div className=" font-bold px-3 flex place-items-start py-3">Description <span className=' font-bold'>:</span> </div>
                <div className="text-gray-500 py-3 text-justify">
                    
                    {book.description?.length < 2900 || show === true ? (
                        <>
                            {book.description}
                            {show === true ? (
                            <button className='text-blue-500 hover:underline' onClick={()=>setShow(!show)}>Read less</button>
                            ) : ""}
                        </>
                        ) : (
                        <>
                            {book.description?.substring(0, 2900)}
                            <button className='text-blue-500 hover:underline' onClick={()=>setShow(!show)}>Read More</button>
                        </>
                        )}
                </div>

            </div>
        </div>}
        </>}

    </div>
  )
}

export default Book
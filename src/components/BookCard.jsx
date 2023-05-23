import React from 'react'
import { Link } from 'react-router-dom'
import CoverError from '../assets/images/cover-error.png'

function BookCard({book}) {
  return (
    <div className="rounded shadow-lg w-[200px] bg-gray-300 relative hover:scale-105 duration-150 hover:border-2 border-solid dark:border-white border-black">
        <Link to={`/books/${book._id}`}>
            <div className="group">
                <img className="h-full w-[200px] object-cover filter transition-all duration-300 ease-in-out group-hover:blur-sm rounded shadow-lg" src={book.cover} alt={book.title} onError={(e)=>e.target.src = CoverError}/>
                <h1 className="p-2 text-blue-300 text-sm font-bold syne absolute bottom-0  z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {book.title.length > 50 ? book.title.substring(0, 50) + '...' : book.title}
                </h1>
                <h1 className="p-2  syne absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{book.categories.name}</span>
                </h1>
            </div>
        </Link>
    </div>

  )
}

export default BookCard
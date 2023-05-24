import React from 'react'
import BookCard from '../components/BookCard'
import Bookjson from '../components/book.json'
import { TypingHeader } from '../components/animation/TypingAnimation'
import Trending from '../components/swiper/Treanding'
import Search from '../components/Search'

function Home() {
  return (
        <div className=" w-full py-16  pb-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900">
        {/* <div className='w-full flex justify-center items-center'>
            <TypingHeader />
        </div>*/}
        <div className="mt-8">
            <Search />
        </div>

    <div className='p-4'>
        <Trending />
    </div>

        {/* <div className="mx-auto place-items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-10 gap-3">
            {Bookjson.map((book,index) => (
                // if index > 10 return null
                index > 50 ? null : <BookCard key={book._id} book={book} />
            ))}

        </div> */}

        {/* pagination with tailwindcss */}
        
        
    </div>
  )
}

export default Home
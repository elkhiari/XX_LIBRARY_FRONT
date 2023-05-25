import React from 'react'
import HomeTitle from '../title/HomeTitle'
import BookCard from '../utils/BookCard'
import Bookjson from '../../data/book.json'

function ForYou() {
  return (
    <div>
        <HomeTitle title="For you " subtitle="#20 Books"/>
        <div className="mx-auto place-items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-10 gap-3 mt-6">
            {Bookjson.map((book,index) => (
                index >= 20 ? null : <BookCard key={book._id} book={book} />
            ))}
        </div>
    </div>
     
  )
}

export default ForYou
import React, { useEffect, useState } from 'react'
import HomeTitle from '../title/HomeTitle'
import BookCard from '../utils/BookCard'
// import Bookjson from '../../data/book.json'
import axios from 'axios'

function ForYou() {
  const [forYou,setForYou] = useState([])
    const getBooks = async () => {
        try {
          const response = await axios.get(process.env.REACT_APP_API_URL + '/books');
          setForYou(response.data.books);
        }
        catch (error) {
          console.log(error);
        }
      }
      useEffect(()=>{
        getBooks();
      },[])
  return (
    <div>
        <HomeTitle title="For you " subtitle="#20 Books"/>
        <div className="mx-auto place-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-6">
            {forYou && forYou.map((book,index) => (
                index >= 20 ? null : <BookCard key={book._id} book={book} />
            ))}
        </div>
    </div>
     
  )
}

export default ForYou
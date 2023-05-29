import React, { useContext, useEffect, useState } from 'react'
import HomeTitle from '../title/HomeTitle'
import BookCard from '../utils/BookCard'
// import Bookjson from '../../data/book.json'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext'
import Loading from '../utils/Loading'

function ForYou({title,subtitle,endpoint}) {
  const [forYou,setForYou] = useState([])
  const [loading,setLoading] = useState(false)
    const getBooks = async () => {
        try {
          setLoading(true)
          const response = await axios.get(process.env.REACT_APP_API_URL + '/'+endpoint);
          setForYou(response.data.books);
          setLoading(false)
        }
        catch (error) {
          console.log(error);
        }
      }
      useEffect(()=>{
        getBooks();
      },[])
      
  return (
    <div className='relative min-h-[300px]'>
        <HomeTitle title={title} subtitle={subtitle}/>
        {loading?<Loading />:<div className="mx-auto place-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-6">
            {forYou && forYou.map((book,index) => (
                index >= 20 ? null : <BookCard key={book._id} book={book} />
            ))}
        </div>}
    </div>
     
  )
}

export default ForYou
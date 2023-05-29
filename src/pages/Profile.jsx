import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { VscVerifiedFilled } from "react-icons/vsc";
import MyCard from '../components/utils/MyCard';
import Model from '../components/utils/EditModel';
import { Link } from 'react-router-dom';
import Loading from '../components/utils/Loading';

function Profile() {
    const {token,user} = useContext(AuthContext)
    const [hidden,setHidden] = useState(false)
    const [book, setbook] = useState(null)
    const [posts, setPosts] = useState([])
    const [loading,setLoading] = useState(false)

    const getPosts = async () => {
        try {
            setLoading(true)
            axios.get(`${process.env.REACT_APP_API_URL}/books/mybooks`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then(res=>{
                setPosts(res.data.books)
                setLoading(false)
            }).catch(err=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [token])

    const handleClick = (book) => {
        setbook(book)
        setHidden(true)
      }



  return (
    <div className='w-full py-16  pb-32 container mx-auto  syne'>
        {loading?<Loading />:<>{user && <div className="flex flex-col items-center mt-4 justify-center">
            <div className={`flex place-content-center bg-${user.gender === "male"?"blue":"pink"}-400 dark:bg-${user.gender === "male"?"blue":"pink"}-300 w-full p-4 md:rounded space-x-20`} >
                <img src={process.env.REACT_APP_API_URL+user.avatar} alt="" className="w-24 h-24 rounded-full object-cover" />
                <div className="flex flex-col  justify-center ml-5">
                    <h1 className="text-2xl font-bold flex place-content-center place-items-center ">{user.name}{user.role === "admin" && <VscVerifiedFilled className='ml-3' />}</h1>
                    <h2 className="text-sm font-medium">{user.email}</h2>
                </div>
            </div>
        </div>}
        <div>
            <h1 className="text-2xl font-bold mt-10">Your Posts</h1>
            <div className="flex flex-col items-center mt-4 justify-centerw-full">
            <div className="mx-auto place-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-6">
            {posts && posts.map((book,index) => (
                index >= 20 ? null : <MyCard key={book._id} book={book} boxShadow={true} handleClick={()=>handleClick(book)} />
            ))}
        </div>

        </div>
        </div>
        {hidden && <Model setHidden={setHidden} book={book} getPosts={getPosts} />}

</>}
    </div>
  )
}

export default Profile
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { VscVerifiedFilled } from "react-icons/vsc";
import MyCard from '../components/utils/MyCard';
import Model from '../components/utils/EditModel';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/utils/Loading';


function UsersProfile() {
    const {token} = useContext(AuthContext)
    const [hidden,setHidden] = useState(false)
    const [book, setbook] = useState(null)
    const [posts, setPosts] = useState([])
    const {id} = useParams()
    const [userX, setUserX] = useState()
    const {user} = useContext(AuthContext)
    const [loading,setLoading] = useState(false)

    const getUser = async () => {
        try {
            setLoading(true)
            axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then(res=>{
                setUserX(res.data.user)
            }).catch(err=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }


    const getPosts = async () => {
        try {
            axios.get(`${process.env.REACT_APP_API_URL}/books/user/`+userX._id,{
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
        getUser()
    }, [user])

    useEffect(() => {
        if(userX){
            getPosts()
        }
    }, [userX])


    const handleClick = (book) => {
        setbook(book)
        setHidden(true)
      }



  return (

    <div className='w-full py-16  pb-32 container mx-auto  syne'>
        {loading?<Loading />:<>{userX && <div className="flex flex-col items-center mt-4 justify-center">
            <div className={`flex place-content-center bg-${userX.gender === "male"?"blue":"pink"}-400 dark:bg-${userX.gender === "male"?"blue":"pink"}-300 w-full p-4 md:rounded space-x-20`} >
                <img src={process.env.REACT_APP_API_URL+userX.avatar} alt="" className="w-24 object-cover h-24 rounded-full" />
                <div className="flex flex-col  justify-center ml-5">
                    <h1 className="text-2xl font-bold flex place-content-center place-items-center ">{userX.name}{userX.role === "admin" && <VscVerifiedFilled className='ml-3' />}</h1>
                    <h2 className="text-sm font-medium">{userX.email}</h2>
                </div>
            </div>
        </div>}
        <div>
            <h1 className="text-2xl font-bold mt-10">Your Posts</h1>
            <div className="flex flex-col items-center mt-4 justify-centerw-full">
            <div className="mx-auto place-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-6">
            {posts && posts.map((book,index) => (
                index >= 20 ? null : (user?.role === "admin"?<MyCard key={book._id} book={book} boxShadow={true} handleClick={()=>handleClick(book)} />:<Link to={"/books/"+book._id} ><MyCard key={book._id} book={book} boxShadow={true} handleClick={()=>handleClick(book)} /></Link>)
            ))}
        </div>

        </div>
        </div>
       {user?.role === "admin" ? <>
       {hidden && <Model setHidden={setHidden} book={book}  />}
       </>:""}
                </>}

    </div>
  )
}

export default UsersProfile
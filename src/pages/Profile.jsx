import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { VscVerifiedFilled } from "react-icons/vsc";

function Profile() {
    const {token,user} = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/mybooks`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(res=>{
            setPosts(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [token])


  return (
    <div className='w-full py-16  pb-32 container mx-auto  syne'>
        {user && <div className="flex flex-col items-center mt-4 justify-center">
            <div className={`flex place-content-center bg-${user.gender === "male"?"blue":"pink"}-400 dark:bg-${user.gender === "male"?"blue":"pink"}-300 w-full p-4 rounded space-x-20`} >
                <img src={user.avatar} alt="" className="w-24 h-24 rounded-full" />
                <div className="flex flex-col  justify-center ml-5">
                    <h1 className="text-2xl font-bold flex place-content-center place-items-center ">{user.name}{user.role === "admin" && <VscVerifiedFilled className='ml-3' />}</h1>
                    <h2 className="text-sm font-medium">{user.email}</h2>
                </div>
            </div>
        </div>}
        <div>
            <h1 className="text-2xl font-bold mt-10">Your Posts</h1>
            <div className="flex flex-col items-center mt-4 justify-centerw-full">
                <div>
                    <div className="flex flex-col items-center mt-4 justify-center">

                    </div>
                </div>

                </div>
        </div>


    </div>
  )
}

export default Profile
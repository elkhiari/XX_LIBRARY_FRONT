import React, { useContext, useEffect, useState } from 'react'
import { TypingHeader } from '../components/animation/TypingAnimation'
import Treading from '../components/Home/Treading'
import Search from '../components/Home/Search'
import ForYou from '../components/Home/ForYou'
import MostPublished from '../components/Home/MostPublished'
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContext'
import Loading from '../components/utils/Loading'

function Home() {
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    

  return (
        <div className=" w-full py-16 relative min-h-screen  pb-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900">
            {loading?<Loading />:<div className="container mx-auto">
                <div className="mt-8  min-h-[300px]">
                    <Search />
                </div>
                <div className='p-4 min-h-[300px]'>
                    <Treading />
                </div>
                <div className='p-4 min-h-[300px]'>
                    <ForYou title="For you" endpoint="books/random"  subtitle="#20 Books"/>
                    
                </div>
                <div className="p-4">
                    <MostPublished />
                </div>
            </div>}

        </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import { TypingHeader } from '../components/animation/TypingAnimation'
import Treading from '../components/Home/Treading'
import Search from '../components/Home/Search'
import ForYou from '../components/Home/ForYou'
import MostPublished from '../components/Home/MostPublished'
import axios from 'axios'

function Home() {

  return (
        <div className=" w-full py-16  pb-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900">
            <div className="container mx-auto">
                <div className="mt-8">
                    <Search />
                </div>
                <div className='p-4'>
                    <Treading />
                </div>
                <div className='p-4'>
                    <ForYou />
                    
                </div>
                <div className="p-4">
                    <MostPublished />
                </div>
            </div>

        </div>
  )
}

export default Home
import React from 'react'
import ForYou from '../components/Home/ForYou'

function Books() {
  return (
    <div className=" w-full py-16  pb-32 bg-gradient-to-b ">
        <div className="container mx-auto">
                    <ForYou title={"All Books"} endpoint={"books"} />
        </div>
    </div>
  )
}

export default Books
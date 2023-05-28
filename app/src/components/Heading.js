import React from 'react'
import banner from '../banner-2.png'


function Heading() {

  return <>
    <div className={`bg-[url(${banner})] h-[40] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}>
    
    <div className="text-xl  md:text-3xl text-white p-6 bg-black bg-opacity-50 w-full flex justify-center">
      
    Happy Shopping</div>
            
    </div>
  </>;
}

export default Heading

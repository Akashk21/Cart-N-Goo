import React, {useState} from 'react'


function Pagination({pageUse, goNext, goPrevious}) {
  //  const [pageNumber, setPage] =useState(4);
  
  // function goPrevious() {
  //   if(pageNumber>1)
  //   setPage(pageNumber - 1);
  // }
  // function goNext() {
  //   if(pageNumber<4)
  //   setPage(pageNumber + 1);
  // }

  
  return <>
  
  <div className='w-full flex justify-center mb-8'>
    <button className='p-2 border-indigo-500 border-r-0 rounded-l-xl border-4 text-indigo-500' 
     onClick={goPrevious} >
    Previous</button>
    <button className='p-2 border-indigo-500  bg-gray-300  border-4 text-indigo-500'>{pageUse}</button>
    {/* <button className='p-2 border-indigo-500  bg-gray-300 border-4 text-indigo-500'>3</button> */}

    <button className='p-2 border-indigo-500 border-l-0 rounded-r-xl border-4 text-indigo-500'
    onClick={goNext}>
      Next</button>
    
    </div>
  </>
}

export default Pagination
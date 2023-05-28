import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import { Oval } from 'react-loader-spinner'

function Catlog() {
  
  const [hover,setHover] = useState('')
  const [pitems,setpitems] = useState([])
  // const [items,setItems] = useState([])
  const [cart, setCart] = useState([])
  const [page, setPage] =useState(1);
  const [count,setCount] = useState(1);

  function goPrevious() {
    if(page>1)
    setPage(page - 1);
  }
  function goNext() {
    // if(page<4)
    setPage(page + 1);
  }

  // function increment(id){
  //   if(localStorage.getItem("${id}")==null)
  //   {
  //     setCount(1);
  //   }
  //   else{
  //     setCount(localStorage.getItem("${id}"));
  //   }
  //   setCount(count + 1)
  //   localStorage.setItem("${id}", JSON.stringify(count))

  // }
  
  useEffect(function () {
    // everytime when page reloads
    let oldFav = localStorage.getItem("bitem");
    oldFav = JSON.parse(oldFav) || [];
  
    setCart(oldFav);
    // data 
    axios.get
      (`https://fakestoreapi.com/products`).then((res) => {
        
        setpitems(res.data);
    }
    )


}, [page])

let add = (pitem) => {
    let newArray = [...cart, pitem]
    setCart([...newArray])
    // console.log(newArray)
    // after for reload 
    localStorage.setItem("bitem", JSON.stringify(newArray))
}

let del = (pitem) => {
    let newArray = cart.filter((m) => m.id != pitem.id)
    setCart([...newArray])
    localStorage.setItem("bitem", JSON.stringify(newArray))
}
  return <>
  <div className='mb-6'>
    <div className='mb-8 mt-8 font-bold text-2xl text-center'>Trending Items</div>
    {
           pitems.length == 0 ?
                <div className='flex justify-center'>
                        <Oval
                            heigth="100"
                            width="100"
                            color='grey'
                            secondaryColor='grey'
                            ariaLabel='loading'
                        />
                  </div> :
      
      <div className='flex flex-wrap justify-center'>
        {
            pitems.map((pitem) =>(

            
            <div className={`bg-[url(${pitem.image})]  
            m-5 md:h-[30vh] h-[20vh]  md:w-[250px] w-[135px] bg-center bg-cover 
            rounded-xl
            ease-out duration-300
            hover:scale-110
            flex items-end
            relative
            
            `}
            onMouseEnter={()=>{setHover
            (pitem.id)}}

            onMouseLeave={()=>{setHover("")}}
            
            >

              {
                hover == pitem.id && <>{
                  !cart.find((m)=>m.id==pitem.id) ?
                 
                <div className='absolute right-2 top-5 bg-indigo-500 text-xl rounded-xl p-2
                cursor-pointer
                '
                onClick={()=>add
                (pitem)}
                > 🛒 </div>: 
                <div className='absolute right-2 top-5 bg-indigo-500 text-xl rounded-xl p-2
                cursor-pointer
                '
                
                onClick={()=>del
                (pitem)}
                > ❌ </div>

                }
                </>
              }
            
            
            <div className='w-full text-white py-2 text-center text-mg rounded-b-xl bg-indigo-500 font-bold'>{pitem.title}</div>
            </div>
    
    ))
  }
      </div>
}
  </div>
  <Pagination pageUse={page} goNext={goNext} goPrevious={goPrevious}/>
  </>
}

export default Catlog;
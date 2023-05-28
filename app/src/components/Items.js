import React, { useState, useEffect } from 'react'
import axios from 'axios';
function Items() {

  const [curGenre, setCurGenre] = useState('All Genres');
  const [pitem,setpitems] = useState([])
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(1);

  const [rating, setRating] = useState(0)
  const [popularity, setPopularity] = useState(0)


  useEffect(function () {
    // everytime when page reloads
    let oldFav = localStorage.getItem("bitem");
    oldFav = JSON.parse(oldFav) || [];
  
    setCart(oldFav);
    // data manga 
    axios.get
      (`https://fakestoreapi.com/products`).then((res) => {
        
        setpitems(res.data);
    }
    )


}, [page])

// sorting 
if (rating == 1) {
  filteredpitems = filteredpitems.sort(function (pitemA, pitemB) {
    return pitemA.rate - pitemB.rate
  })
} else if (rating == -1) {
  filteredpitems = filteredpitems.sort(function (pitemA, pitemB) {
    return pitemB.rate - pitemA.rate
  })
}
  if (popularity == 1) {
    filteredpitems = filteredpitems.sort(function (pitemA, pitemB) {
      return pitemA.popularity - pitemB.popularity
    })
  } else if (popularity == -1) {
    filteredpitems = filteredpitems.sort(function (pitemA, pitemB) {
      return pitemB.popularity - pitemA.popularity
    })
  }

let pay = (pitem) => {

  // Display confirmation message
  const confirmationMessage = "Are you sure you want to Buy?";
  const confirmed = window.confirm(confirmationMessage);
  if (confirmed) {
  // Display fake payment pop-up
  alert("Processing payment...");

  // Simulate payment processing delay
  setTimeout(() => {
    // Display payment successful message
    alert("Payment successful!");
    
    // Perform the remaining logic (updating cart and localStorage) if needed
    let newArray = cart.filter((m) => m.id != pitem.id);
    setCart([...newArray]);
    localStorage.setItem("bitem", JSON.stringify(newArray));
  }, 2000); // Adjust the delay (in milliseconds) as needed
}
};


let del = (pitem) => {
  // Display confirmation message
  const confirmationMessage = "Are you sure you want to delete?";
  const confirmed = window.confirm(confirmationMessage);

  if (confirmed) {
    let newArray = cart.filter((m) => m.id !== pitem.id);
    setCart([...newArray]);
    localStorage.setItem("bitem", JSON.stringify(newArray));
  }
}
// filtered pitems 
let filteredpitems = []


  return <>

    <div className='mt-4 flex justify-center px-2 flex-wrap space-x-2'>
        <button className={
          curGenre == 'All Genres' ?
          'p-1 m-2 px-2 bg-red-400 text-lg text-white rounded-xl font-bold' :  

          'p-1 m-2 px-2 bg-red-400 hover:bg-blue-400 text-lg text-white rounded-xl font-bold'
   
          }>
          All Items
        </button>
        
        <button className={
        curGenre == 'Action' ?
          'p-1 m-2 px-2 bg-red-400 text-lg text-white rounded-xl font-bold' :  

          'p-1 m-2 px-2 bg-red-400 hover:bg-blue-400 text-lg text-white rounded-xl font-bold'}
          onClick={() => {
            // Redirect to home page
            window.location.href = "/";
          }}
          >
          Continue Shopping
        </button>
        </div>

                                          {/* <div>Input Container</div> */}
        {/* <div className='text-center'>
          <input type='text' placeholder='Search' className='border border-2 text-center m-2 p-1'/>
          <input type='number' placeholder='Rows' className='border border-2 text-center m-2 p-1'/>
        </div> */}

   
                                            {/* <div>Table Container</div> */}


                                            <div className="flex flex-col m-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 min-w-full">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className='flex'>
                    
                      Price
                      
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className='flex'>
                      Category
                    </div>
                  </th>
                 
                  <th
                    scope="col"
                    className="px-6 py-3 text-left ld-20 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Remove
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Purchase
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.map((pitem) => (
                  <tr key={pitem.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                      <div className="flex-shrink-0 h-[30px] w-[40px] md:h-[100px] md:w-[180px]">
                      <img className="h-[60px] w-[50px] md:hidden" src={`${pitem.image}`} alt="image" />
                      <img className="hidden md:block h-[100px] w-[180px]" src={`${pitem.image}`} alt="image" />
                    </div>

                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 font-bold">{pitem.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-bold">{pitem.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{pitem.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      <button href="#" className="text-red-600 hover:text-red-900"
                        onClick={() => del(pitem)}
                      >
                        Delete
                      </button>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">

                    <button href="#" className="text-red-600 hover:text-red-900"
                        onClick={() => pay(pitem)}
                      >
                        Pay
                      </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>                                    
   

                                             {/* <div>Pagination</div> */}
    
        <div className='mt-4'>
          {/* <Pagination /> */}
        </div>

  
  </>
}

export default Items;
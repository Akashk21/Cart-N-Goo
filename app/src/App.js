import './App.css';
import Navbar from "./components/Navbar";
import Heading from './components/Heading';
import Items from './components/Items';
import Catlog from './components/Catlog';
import Pagination from './components/Pagination';

import { BrowserRouter,Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<>
          
          <Heading/>
          <Catlog/>
          {/* <Pagination/> */}
        </>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path="/home" element={<>
          
          <Heading/>
          <Catlog/>
        </>}/>
        </Routes>
    {/* <Heading></Heading>
    <Items></Items>
    <Pagination></Pagination> */}
    
    </BrowserRouter>
  );
}

export default App;

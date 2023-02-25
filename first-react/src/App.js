
import './App.css';
import React, { useState } from 'react' ;
import { AiOutlineBars } from "react-icons/ai";

const App = () =>{
  const [sidebar,setSidebar]=useState(false)//öncelikle görünmesini engeller !sidebar ise durumu tersine çevirir
  return( <div>
    <div className='navbar'> 
      <AiOutlineBars className='icon' onClick={()=>{setSidebar(!sidebar)}}></AiOutlineBars>
    </div>
        {sidebar&& 
        <div className='sidebar'>
        <li>Home</li>
        <li>Company</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Youtube</li>
        </div>}
    
  </div>
   
  )
}
export default App

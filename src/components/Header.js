import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants.js"
import {Link} from "react-router-dom"
import UseOnline from "./UseOnline.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
const Header=() => {
  const [btnName, setbtnName] =useState("Login")
  const {loggedInuser} = useContext(UserContext);
  //subscribing to the store using selector
  const cartitems = useSelector((store)=>store.cart.items) 
  console.log(cartitems)
  
    return (
     <div className='flex justify-between bg bg-pink-100 shadow-lg mb-2'>
       <img className="w-40" 
       src={LOGO_URL}/>
       <div className="list">
       <nav>
      <ul className="flex p-10 m-4">
        <li className="px-4">Status:{UseOnline ? "😊":"🍅"}</li>
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-4">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-4 font-bold text-xl">
           <Link to="/cart">🛒({cartitems.length} items)</Link>
        </li>
        <li className="px-4" >{loggedInuser}</li>
      </ul>
    </nav>
       {/* <button className="login" onClick={()=>{
        btnName==="Login"? setbtnName("LOGOUT") :setbtnName("Login")
       }}>{btnName}</button> */}
       
       </div>
     </div> 
    )
 }
 export default Header;
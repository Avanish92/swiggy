import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";

const Body = () =>{
  const [ListOfRestaurents, setListOfRestaurents]=useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [filterbtn,setfilterbtn] = useState("Top Rated Restaurent")
  const [searchText,setsearchText] =useState([])
  const [searchReataurent,setsearchReataurent]=useState([])
  
  const fetchData = async()=>{
    const data= await fetch(
   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8902208&lng=77.6092188&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

   const json = await data.json();
   setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
       
}
  // useEffect is called after rendering the content
  // if you have execute anything after rendring you can use UseEffect
  useEffect(()=>{
   fetchData()
  },[])
  //console.log(fetchData())
     //
      const promotedRestaurent = withPromotedLabel(ListOfRestaurents)
 
    return ListOfRestaurents.length===0 ? <Shimmer/>:(
      <div className='body'>
        <div className='Filter flex'>
          <div className="searchbox m-4 p-4">
            <input type="text" className=" border border-solid border-black bg-pink-50" onChange={(e)=>{setsearchText(e.target.value)}}></input>
            <button className="px-4 py-2 bg-green-100 m-4 border-solid border-black" onClick={()=>{
               searchReataurent = ListOfRestaurents.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
              )
              setsearchReataurent(searchReataurent);
              setFilteredRestaurant(searchReataurent);  
            }}>Search</button>
          </div>
          <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-300 rounded-lg" 
          onClick={()=>{
            //Filter Logic here
            const filteredlist = ListOfRestaurents.filter(
              (res)=>res.info.avgRating>4.4);
              setListOfRestaurents(filteredlist)
              setfilterbtn("Resturents rating more than 4.4")
          }}>{filterbtn}</button>
          </div>
        </div>
       
        <div className='flex flex-wrap'> 

        {ListOfRestaurents.map((restaurant)=>(
           <Link key={restaurant.info.id} to=
           {"/restaurents/"+restaurant.info.id}>
            <RestaurantCard  resdata={restaurant}></RestaurantCard></Link>
        ))}
         </div>
        
      </div>
    )
  }
  export default Body;
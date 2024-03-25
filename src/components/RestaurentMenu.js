
import Shimmer from "./Shimmer"
import {useParams} from "react-router-dom"
import useRestaurentMenu from "../utils/useRestaurentMenu"
import RestaurentCategory from "../components/RestaurentCategory"
import { useState } from "react"
const RestaurentMenu=()=>{
    const {resId} = useParams()
    const resInfo =useRestaurentMenu(resId)
    const [showIndex,setshowIndex]=useState(null)
    
    if(resInfo===null) return <Shimmer/>
          const {name,cuisines,avgRating,costForTwoMessage
          }= resInfo?.cards[0]?.card?.card?.info
          const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
         // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
     const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") 
       // console.log(categories)
    return  (
        <div className="text-center">
             <h1 className="font-bold my-6 text-2xl">{name}</h1> 
            <p>{cuisines.join(" ,")}-{costForTwoMessage} </p>
            {/* Categories Accordian */}
            {categories.map((category,index)=>(
                //Controled component
                <RestaurentCategory key={category?.card?.card.title} 
                data={category?.card?.card}
                showItems={index===showIndex ? true:false}
                setshowIndex={()=>setshowIndex(index)}

                />
            ))}
        </div>
    )
}
export default RestaurentMenu
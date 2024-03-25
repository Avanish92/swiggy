import { CDN_URL } from "../utils/constants"
const RestaurantCard = (props) => {
    const {resdata} = props
  return(
   <div className='m-4 p-4 w-[250px] rounded-lg' style={{backgroundColor:"#f0f0f0"}}>
     <img
     className='rounded-lg'
      alt="res-logo" src={CDN_URL+ 
      resdata.info.cloudinaryImageId}/>
     <h3 className="font-bold py-4 text-lg">{resdata.info.name}</h3>
     <h4>{resdata.info.cuisines.join(", ")}</h4>
     <h4>{resdata.info.avgRating} stars</h4>
     <h4>₹300{resdata.info.costForTwo/100}</h4>
     <h4>{resdata.info.deliveryTime}</h4>
   </div>
  )
}
export const withPromotedLabel = (RestaurantCard)=>{
  return(()=>{
    return(
      <div>
         <label>Promoted</label>
         <RestaurantCard/>
      </div>
    )
  }
  )
} 
export default RestaurantCard;
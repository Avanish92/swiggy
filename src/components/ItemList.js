import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
import { CDN_URL } from "../utils/constants"

const ItemList=({items})=>{

    const dispatch = useDispatch()

    const handleAddItem = (item) =>{
        //dispatch an action
        dispatch(addItem(item))

    }
    return(
       <div>
            {items.map((item) => (
                <div className="p-2 m-2 border-gray-400 border-b-2 text-left flex" 
                 key={item.card.info.id}>
                    <div className="w-9/12">
                    <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                   
                </div>
                <div className="w-3/12 p-6"> 
                    <div className="absolute ">
                    <button 
                     className="p-2 mx-8 my-20 rounded-lg bg-white shadow-lg text-green-400"
                        onClick={()=>handleAddItem(item)}>
                        ADD +</button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-full"></img>
                    </div>
                    </div>
                   
               
            ))}
       </div>
    )
}
export default ItemList
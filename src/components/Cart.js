import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch =  useDispatch()
    const handleclearCart = ()=>{
        dispatch(clearCart())
    }
    return <div className="text-center m-4 p-5">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer" onClick={handleclearCart}>
                
                Clear Cart
            </button>
            {cartItems.length===0 && <h1>There is no item to cart, Please Add </h1>}
            <ItemList items={cartItems}/>
        </div>
        </div>
}
    export default Cart
import { useEffect, useState } from "react";
import Button from "../button/Button"
import { getProduct } from "../../services/api";
import { Products } from "../../types/Server";
import { useShoppingCartContext } from "../../context/shoppingcartcontext/ShoppingCartContext";

interface ICartItem{
  id: string | number;
  qty: number;
}

function CartItem({id , qty} : ICartItem) {

  const [Product, setProduct] = useState<Products>()

  const {handleIncreaseProductQty,handleDecreaseProductQty , delProductFromCart} = useShoppingCartContext()

  useEffect(()=>{
    getProduct((id)).then(data=>{
      setProduct(data)
    })
  },[ ])

  return (
    <div className="flex mt-4 border-b pb-2 border-gray-300">
        <img className="rounded w-36" src={Product?.images[0]} alt="mobile" />
        <img  alt="" />

        <div className="ml-4">
            <h3>Product Name: ${Product?.title}</h3>

            <Button className="px-4 rounded" variant="primary" onClick={()=> handleIncreaseProductQty(id)}>+</Button>
            <span className="p-1 text-lg">{qty}</span>
            <Button className="px-4 rounded mr-1" variant="primary" onClick={()=> handleDecreaseProductQty(id)}>-</Button>
            <Button className="px-4 rounded" variant="danger" onClick={()=> delProductFromCart(id)}>REMOVE</Button>
            
        </div>
        
    </div>
  )
}

export default CartItem
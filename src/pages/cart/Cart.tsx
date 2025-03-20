import { useEffect, useState } from "react"
import Button from "../../components/button/Button"
import CartItem from "../../components/cartItem/CartItem"
import Container from "../../components/container/Container"
import { useShoppingCartContext } from "../../context/shoppingcartcontext/ShoppingCartContext"
import { getProducts } from "../../services/api"
import { Products } from "../../types/Server"

function Cart() {
    const { cartItems, theme} = useShoppingCartContext()
    const [products, setProducts] = useState<Products[]>([]);


    useEffect(()=>{
      getProducts().then((data)=>{
        setProducts(data)
      })
    },[])

    const discount: number = 0.5

    const getTotalPrice = (): number => {
      return cartItems.reduce((total, item) => {
        const product = products.find(i => i.id == item.id);
        return total + (product ? product.price * item.qty : 0);
      }, 0);
    };

    const getFinalPrice = (): number =>{
      const totalPrice = getTotalPrice()
      const finalPrice = totalPrice - (totalPrice * discount);
      return finalPrice;
    }

  return (
    <div className="sm: mx-3">
        <Container>
            <div>
                {cartItems.map((item)=>(
                    <CartItem {...item} />
                ))}
            </div>

            <div className="bg-gray-300 p-4">
                <h3>Total Price: {getTotalPrice()}€</h3>
                <h3>Your discount: 50%</h3>
                <h3>Final Price: {getFinalPrice()}€</h3>
            </div>

            <div className="text-right mt-2">
                <Button className="text-white" style={{backgroundColor: theme.color}}>
                Place an order
                </Button>
            </div>
        </Container>
    </div>
  )
}

export default Cart
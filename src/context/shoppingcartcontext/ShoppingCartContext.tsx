import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface ShoppingCartProvider {
    children: React.ReactNode;
}

interface cartItem {
    id: string | number;
    qty: number;
}

interface Theme{
    color: string;
}

interface ShoppingCartContext {
    cartItems : cartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<cartItem[]>>
    handleIncreaseProductQty: (id: number | string)=> void
    handleDecreaseProductQty: (id: number | string)=> void
    getProductQty: (id: number | string) => number | string
    delProductFromCart: (id: number | string)=> void
    cartQty : number;
    theme : Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}



export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCartContext = () => useContext(ShoppingCartContext) 

export function ShoppingCartProvider({children}:ShoppingCartProvider){

const [cartItems, setCartItems] = useLocalStorage<cartItem[]>("cartItems" , [])

const handleIncreaseProductQty = (id: number | string) =>{
    
    setCartItems((currentProduct)=>{
        let selectedProduct = currentProduct.find(product=> product.id == id)
        if(selectedProduct == null){
            return [...currentProduct, {id: id , qty : 1}]
        }else{
            return currentProduct.map((item)=>{
                if(item.id == id){
                    return {...item,qty: item.qty + 1};
                }else{
                    return item
                }
            })
        }
    })
}

const handleDecreaseProductQty = (id: number | string) =>{
    setCartItems((currentProduct)=>{
        let selectedProduct = currentProduct.find(product=> product.id == id)
        if(selectedProduct?.qty === 1){
            return currentProduct.filter(product => product.id !== id)
        }else{
            return currentProduct.map((item)=>{
                if(item.id == id){
                    return {...item,qty: item.qty - 1};
                }else{
                    return item
                }
            })
        }
    })
}

const getProductQty = (id : number | string) =>{
    return cartItems.find(item=> item.id == id)?.qty || 0
}


const delProductFromCart = (id: number | string) =>{
    setCartItems((currentItem) => {
       return currentItem.filter((item) => item.id != id)
    })
}

const [theme, setTheme] = useState<Theme>({
    color: "#16A34A"
})


const cartQty = cartItems.reduce((Qty , item)=> Qty + item.qty, 0)

    return(
        <ShoppingCartContext.Provider value={{cartItems , handleIncreaseProductQty, handleDecreaseProductQty , getProductQty , delProductFromCart , cartQty , theme , setTheme , setCartItems}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
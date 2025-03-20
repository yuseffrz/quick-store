import { Link, useParams } from "react-router-dom"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button"
import { useEffect, useState } from "react"
import { getProduct } from "../../services/api"
import { Products } from "../../types/Server"
import { useShoppingCartContext } from "../../context/shoppingcartcontext/ShoppingCartContext"
import {motion} from 'framer-motion'

function SingleProduct() {
  const [product, setProduct] = useState<Products>()
  const { delProductFromCart,getProductQty,handleDecreaseProductQty,handleIncreaseProductQty, cartItems, theme } = useShoppingCartContext()
  
    const {id}  = useParams()
    
    useEffect(()=>{
      getProduct((id as string | number)).then(data=>{
        setProduct(data)
      })
    },[ ])

    console.log(cartItems)
    const MotionButton = motion(Button);
    
  return (
    <div >
       <Container>
            <div className="sm: grid sm: grid-cols-1 sm: mx-3md:grid md:grid-cols-6 h-96 shadow-xl mt-4 lg:grid lg:grid-cols-12 md:mx-0" >
                <div className="col-span-2  bg-blue-100">
                     <img className="rounded"
                      src={product?.images[0]} 
                      alt="mobile" />

                    <div>
                        { getProductQty(parseInt(id as string)) === 0 ?
                          (
                            <div>
                            <MotionButton
                            // variant="primary"
                            
                             className="w-full mt-2 text-white" style={{backgroundColor: theme.color}}   
                            onClick={()=> handleIncreaseProductQty(parseInt(id as string))}
                            transition={{duration: 0.3}} animate={{backgroundColor: theme.color}}
                            >
                               Add to Cart
                               
                             </MotionButton>
                           </div>
                          )
                          :
                          (
                            <>
                           <div className="flex justify-center items-center gap-6">
                            <MotionButton variant='primary' className="w-full mt-2"
                            whileTap={{ scale: 1.1 }}  
                            onClick={()=> handleIncreaseProductQty(parseInt(id as string))}>
                               +
                             </MotionButton>
                            <div className="pt-1" >
                            <motion.span
                            
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-lg " >{getProductQty(parseInt(id as string))}</motion.span>
                            </div>
                            <MotionButton 
                            
                            variant='danger' className="w-full mt-2"  
                            onClick={()=> handleDecreaseProductQty(parseInt(id as string))}>
                               -
                            </MotionButton>

                           </div>
                           <div >
                            <MotionButton className="w-full mt-2"  variant="danger" onClick={() => delProductFromCart(parseInt(id as string))}>
                              Remove
                            </MotionButton>
                            
                           </div>
                            </>
                          )

                        }
                        <Link to='/store'>
                        <MotionButton className="bg-indigo-950 p-1 rounded text-white w-full mt-1 text-center"> 
                         Back to Store
                        </MotionButton>
                        </Link>
                        


                      </div>
                </div>
                <div className="md:col-span-4 lg:col-span-10 p-4 ">
                  
                    <h1 className="font-bold">{product?.title}</h1>
                    <div>
                        <h3 className="text-green-600">Price: {product?.price}€</h3>
                        <h2 className="text-blue-700">Category: {product?.category.slug}</h2>
                        <h4>Creation at: {product?.creationAt}</h4>
                        <p className="italic text-gray-500">{product?.description}</p>

                    </div>
                    
                </div>
                
            </div>
       </Container>
    </div>
  )
}

export default SingleProduct
import { Products } from "../../types/Server"
import { motion } from 'framer-motion'
type ProductsItem = Products

function ProductItem({title,price,images, description}: ProductsItem) {

// function handleImgError(e:React.SyntheticEvent<HTMLImageElement, Event>){
//   const productcart = e.currentTarget.closest('.product-cart') as HTMLElement | null
//   if(productcart){
//     productcart.style.display = 'none'; 
//   }
// }
  
  return (
        <motion.div whileHover={{scale: 1.03}} className='sm: my-4 md:my-0  product-cart shadow-xl rounded border-[1px] border-gray-400 pb-2 h-[100%]'>
        <img className="rounded" src={images[0]} alt="mobile" />

        <div className='flex justify-between items-center px-2 pt-2'>
            <h3 className="font-semibold">{`${title.substring(1,30)}...`} </h3>
            <span className="text-amber-600">{price}€</span>
        </div>
        <div className="px-2">
            <p className="line-clamp-1 text-gray-500">{description}</p>
        </div>
        </motion.div>
    
  )
}

export default ProductItem
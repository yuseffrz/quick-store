import { Link } from "react-router-dom"
import Container from "../container/Container"
import { useShoppingCartContext } from "../../context/shoppingcartcontext/ShoppingCartContext"
import { motion} from 'framer-motion'

function Navbar() {

  const {cartQty , setTheme , theme} = useShoppingCartContext();
  const changeColor = (color: string) => {
    setTheme({color});
};
  return (
    <motion.div  className="sm: px-3 h-20 border-b border-gray-400 flex items-center text-white" style={{backgroundColor: theme.color}} 
  transition={{duration: 0.3}} animate={{backgroundColor: theme.color}}>
      <Container>
      <div className="flex justify-between">
      <ul className="flex">
        <div className="text-white font-bold text-2xl mt-[3px]"><Link to='/'>QuickStore</Link></div>
        <li className="ml-4 mt-2"><Link to='/'>Home</Link></li>
        <li className="ml-4 mt-2"><Link to='/store'>Store</Link></li>
      </ul>

      <div className="flex justify-between gap-5 items-center">
        <div className="flex justify-center items-center gap-2 text-center">
        <span className="w-[30px] h-[30px] bg-[#B91C1C] p-1 rounded-[50px] text-white border-1 " onClick={()=> changeColor("#B91C1C")}></span>
          <span className="w-[30px] h-[30px] bg-[#1D4ED8] p-1 rounded-[50px] text-white border-1" onClick={()=> changeColor("#1D4ED8")}></span>
          <span className="w-[30px] h-[30px] bg-[#16A34A] p-1 rounded-[50px] text-white border-1 " onClick={()=> changeColor("#16A34A")}></span>
        </div>
        <Link to='/cart' className="relative">
          <button> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAcVJREFUWEftlr9KA0EQxr8PbK0UKxUDFr6DiOYFbMRaBSt70c6ktRMLK/FPYeU7GCEPYGshplcbBdsxI7vHZt3L7V7uuMZpQo7J/Pab/WYuRIPBBtn4h0NEdgFcOdfQA9AlqZ+1RNb2ANwCWyQHddBd+AaAHQNZAqDfNToku7XC/eIi8gpAD6FRi/pct4vIiao28D2S11WrHwdX1Q9Gvd55Vfd+Y4WMnXMRUffrFFQaQw/9covgajpVb2MS9dY/A5KtQrgmVGE8EVGwGnhkegrXq2e8UmPnXV82OYVwT722vZ2ydDzVWcuj2m7gpcduXOdilbvG65Fsx9rf9Yx1uf1tFNyoV9fblRu18fKMVgbuvvWijFe0JaOVh8YuovV2vEaMlqw8YLwIdpYS7FSqcnffp8CDHkmCG/VquvUE8mPev6FkuDnAAoBvkh95hxCRaQCzJO29/0lNhovIKYBDU+mA5IVfVUS2AdwBmAJwSXI/dMgkuFHz6RR6IbkcgPcBrDrPV0g++3lJcNPydwAzplCf5FoAfg9gy3k+R/KtCvgmgCMAXwCOST4F4IsAzgDMDw96TvJ24rYnODwqNbntUVUjkxqF/wBlZLggv1rthgAAAABJRU5ErkJggg=="/> <span className="absolute top-1 -right-1 w-4 h-4 text-[12px] flex justify-center items-center bg-red-500 p-2 rounded-[50%] text-white">{cartQty}</span></button>
        </Link>
      </div>
      
    </div>
    </Container>
    </motion.div>
  )
}

export default Navbar
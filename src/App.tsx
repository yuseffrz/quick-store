import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import SingleProduct from "./pages/singleproduct/SingleProduct"
import Cart from "./pages/cart/Cart"
import { ShoppingCartProvider } from "./context/shoppingcartcontext/ShoppingCartContext"

function App() {

  return (
    <ShoppingCartProvider>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/store/single-product/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Layout>
    </ShoppingCartProvider>
  )
}

export default App

import { data, Link } from "react-router-dom"
import Container from "../../components/container/Container"
import ProductItem from "../../components/productItem/ProductItem"
import { useEffect, useState } from "react"
import { getProducts } from "../../services/api"
import { Products } from "../../types/Server"


function Store() {
  const [products, setProducts] = useState<Products[]>([]);
  

  useEffect(()=>{
    getProducts().then((data)=>{
      setProducts(data)
    })
  },[data])


    return (
    <div>
      <Container>
      <h2 className="sm: ml-4 md:ml-0 mt-5 font-bold italic">Latest Products</h2>
      <div className="sm:grid sm:grid-cols-2 sm: px-4 md:px-0 md:grid-cols-3 lg:grid-cols-4 lg:px-0 gap-4 mt-5">
        { products.length === 0 ? <span>Data not found..</span> : 
          products.map((product)=>(
            (
              <Link key={product.id} to={`single-product/${product.id}`}>
              <ProductItem {...product} />        
            </Link>
            )
          ))
        }
      </div>
      </Container>
    </div>
  )
}

export default Store
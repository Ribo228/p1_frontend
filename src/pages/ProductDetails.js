import { useParams } from "react-router-dom"

const ProductDetails=()=>{
    const params = useParams()
    let productData = null

    // database lookup with id
    if (params.id ==="4"){
        productData = {
            name: "Attacking force light racket 80 5U",
            price: 200.00,
            image: require('../assets/images/ra_ax_1.png')
        }
    }else if(params.id ==="5"){
            productData = {
                name: "Attacking force normal racket 80 4U",
                price: 199.00,
                image: require('../assets/images/ra_ax_2.png')
            }        
    }

    return (
       <>
       <h1>Product details</h1>
       <p>The product ID is {params.id}</p>
       {productData != null ?
       <>
       <img src={productData.image} alt={productData.name} width='250'/>
       <h4>{productData.name}-${productData.price}</h4>
       </>
       : ""
       }
       
       </> 
    )
}

export default ProductDetails
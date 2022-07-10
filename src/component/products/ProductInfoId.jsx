import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import getConfig from '../../utils/getConfig'

const ProductInfoId = ({ product }) => {


    const [counter, setCounter] = useState(1)


    const dispatch = useDispatch()

    const addToCart = () => {
  
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
  
      const addproduct = {
        id: product.id,
        quantity: counter
      }
  
      axios.post(URL, addproduct, getConfig())
        .then(res => {
          console.log(res.data)
          dispatch(getAllProductsCart())
        })
        .catch(err => console.log(err.data))
    }

    const minusOne = () => {
        const minus = counter - 1;
        if(minus >= 1){
            setCounter(minus)
        }
    }
        
    const plusOne = () => setCounter(counter + 1)

  return (
    <article className='product-info'>
        <h2 className='product-info_title'>{product?.title}</h2>
        <div className='card-product_price-container'>
            <div className='card-product_price-colum'>
                <h3 className='card-product_price-label product-info_label'>Price:</h3>
                <p className='card-product_price-number product-info_number'>$ {product?.price}</p>
            </div>
            <div className='card-product_buttom-row'>
                <button onClick={minusOne} className='product-info_minus'><i className="fa-solid fa-minus"></i></button>
                <div className='plus-minus-value'>{counter}</div>
                <button onClick={plusOne} className='product-info_plus'><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
        <button onClick={addToCart} className='add-cart-button'>Add to Cart <i className="fa-solid fa-cart-arrow-down"></i></button>
        <p className='product-info_description'>{product?.description}</p>
    </article>
  )
}

export default ProductInfoId
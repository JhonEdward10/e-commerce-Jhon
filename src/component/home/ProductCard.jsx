import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig';

const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    const goToProductId = () => navigate(`/product/${product.id}`)

    const dispatch = useDispatch()

    const addCartProduct = e => {

        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart';

        const objProduct = {
            id: product.id,
            quantity: 1
        }

        axios.post(URL, objProduct, getConfig() )
        .then(res => {
          console.log(res.data)
          dispatch(getAllProductsCart())
        })
        .catch(err => console.log(err.data))
    }
    



  return (
    <article onClick={goToProductId} className='card-product'>
        <header className='card-product_header'>
            <img 
            className='card-product_img'
            src={product.productImgs[0]} 
            alt="" 
            />

            <img
            className='card-product_img-back' 
            src={product.productImgs[1]} 
            alt="" 
            />

        </header>
        <div className='card-product_body'>
            <h2 className='card-product_title'>
                {product.title}
            </h2>
            <div className='card-product_price-container'>
                <h3 className='card-product_price-label'>Price:</h3>
                <p className='card-product_price-number'>$ {product.price}</p>
            </div>
            <button onClick={addCartProduct} className='card-product_btn'><i className="fa-solid fa-cart-arrow-down"></i></button>
        </div>
    </article>
  )
}

export default ProductCard
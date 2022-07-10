import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfoId from './ProductInfoId'
import SimilarProduct from './SimilarProduct'
import './style/productScreen.css'

const ProductScreen = () => {

    const classImg = ['', 'second-img', 'third-img']

    const [indexClass, setIndexClass] = useState(0)

    const [product, setProduct] = useState()
    const {id} = useParams()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`

        axios.get(URL)
        .then(res => setProduct(res.data.data.product))
        .catch(err => console.log(err))

    }, [])


    const clickPrev = () => {
        const prevClass = indexClass - 1;
        if(prevClass < 0){
            setIndexClass(classImg.length -1)
        }else{
            setIndexClass(prevClass)
        }
    }

    const clickNext = () => {
        const nextClass = indexClass + 1;
        if(nextClass >= classImg.length){
            setIndexClass(classImg.length)
        }else{
            setIndexClass(nextClass)
        }
    }
    

  return (
    <div className='product'>
        <div className='slider'>
            <div onClick={clickPrev} className="slider_prev">&#60;</div>
            <div className={`slider_container ${classImg[indexClass]}`}>
                {
                    product?.productImgs.map(imgSrc => (
                        <img
                        key={imgSrc}
                        src={imgSrc} 
                        alt="" 
                        className='slider_imgs'
                        />
                    ))
                }
            </div>
            <div onClick={clickNext} className='slider_next'>&#62;</div>
            <div className="puntitos-container">
                <div onClick={() => setIndexClass(0)} className={indexClass === 0 ? 'puntitos puntitos_active' : 'puntitos'}></div>
                <div onClick={() => setIndexClass(1)} className={indexClass === 1 ? 'puntitos puntitos_active' : 'puntitos'}></div>
                <div onClick={() => setIndexClass(2)} className={indexClass === 2 ? 'puntitos puntitos_active' : 'puntitos'}></div>
            </div>
        </div>
        <ProductInfoId product={product}/>
        <SimilarProduct product={product}/>
    </div>
  )
}

export default ProductScreen

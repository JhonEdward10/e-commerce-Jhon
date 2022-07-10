import React from 'react'
import ProductsPurchases from './ProductsPurchases'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const PurchasesCard = ({purchase}) => {

  const dateData = new Date(purchase.updatedAt)

  const datePurchase = `${months[dateData.getMonth()]} ${dateData.getDate()}, ${dateData.getFullYear()}`

  return (
    <article className='purchase-card'>
        <h3 className='purchase-card__title'>{datePurchase}</h3>
        <div>
        {
            purchase.cart.products.map(product => (
                <ProductsPurchases 
                key={product.id}
                product={product}/>
            ))
        }
        </div>
    </article>
  )
}

export default PurchasesCard
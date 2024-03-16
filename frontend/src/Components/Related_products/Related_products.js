import React from 'react'
import './Related_products.css'
import all_products  from '../Assets/all_product'
import Item from '../Item/Item'
const Related_products = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
        {all_products.map((item)=>{
            return<Item  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
        })}
      </div>
    </div>
  )
}

export default Related_products

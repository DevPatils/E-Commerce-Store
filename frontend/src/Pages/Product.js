import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumps from '../Components/Breadcrumps/Breadcrumps';
import Product_display from '../Components/Product_display/Product_display';
import Description_box from '../Components/Description_box/Description_box';
import Related_products from '../Components/Related_products/Related_products';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrumps product={product}></Breadcrumps>
      <Product_display product={product}></Product_display>
      <Description_box></Description_box>
      <Related_products></Related_products>
    </div>
  )
}

export default Product

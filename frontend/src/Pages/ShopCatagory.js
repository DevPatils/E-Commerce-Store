import React, { useContext } from 'react'
import './CSS/ShopCatagory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import all_product from "../Components/Assets/all_product";
// import ShopContext  from '../Context/ShopContext'
const ShopCatagory = (props) => {

    const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-catagory'>
      <img className='shop-catagorybanner'src={props.banner} alt=''/>
      <div className="shopcatagory-indexSort">
        <p>
            <span>Show 1 - 12</span> out of 36 product
        </p>
        <div className="shopcatagory-sort">
            Sort by <img src = {dropdown_icon
            } alt=''/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item)=>{
            if(props.catagory===item.category){
                return<Item  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            }
            else{
                return null
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCatagory


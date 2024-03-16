import React, { useContext } from 'react'
// import './Product_display'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import './Product_display.css'
import { ShopContext } from '../../Context/ShopContext'

const Product_display = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='product-display'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
            
        <div className="productdisplay-content">
        <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
            {/* <h1>{product.name}</h1> */}
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(22)</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas est eos temporibus qui accusamus corporis quis ducimus sint nesciunt? Vel!
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select-size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button  onClick={()=>{addToCart(product.id)}} className='Add-to-cart-btn'>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :<span>Women , T-shirt, Crop Top</span></span></p>
                <p className='productdisplay-right-category'><span>Tags :<span>Modern , Latest collection</span></span></p>
            </div>
        </div>
      </div>
    // </div>
  )
}

export default Product_display

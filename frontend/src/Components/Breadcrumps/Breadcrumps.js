import React from 'react'
import './Bredcrump.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumps = (props) => {
    const{product}=props;
  return (
    <div className='Breadcrump'>
      HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name};
    </div>
  )
}

export default Breadcrumps

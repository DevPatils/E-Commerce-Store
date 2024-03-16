import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollections from '../Components/Newcollections/Newcollections';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';
// import Offers from '../Components/Offers/Offers';
// import Popular from '../Components/Popular/Popular';
const Shop = () => {
  return (
    <div>
     
      <Hero/>
      <Popular/>
      <Offers></Offers>
      <Newcollections/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop

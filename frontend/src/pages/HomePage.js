import React from 'react'

import Promo from '../components/Promo'
import ProductSlider from '../components/ProductSlider'
import Products from '../components/Products'
import Incentives from '../components/Incentives'

import {products} from '../products';

function HomePage() {
  return (
    <div>
        <Promo/>
        <ProductSlider products={products} title={'New Arrivals'}/>
        <Products products={products}/>
        <Incentives/>
    </div>
  )
}

export default HomePage
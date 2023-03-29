import React from 'react'

// Componets
import { HeroBanner, FooterBanner, Product } from '@/components'

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Seller Products</h2>
        <p>Speaker of many variations</p>
      </div>

      <div className='products-container'>
        {['Prod 1', 'Prod 2'].map((product) => <Product key={product} />)}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home
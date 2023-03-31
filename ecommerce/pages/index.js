import React from 'react'

// Sanity
import { client } from '../lib/client'

// Componets
import { HeroBanner, FooterBanner, Product } from '@/components'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Best Seller Products</h2>
        <p>Speaker of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  // Products
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  // Banner
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}

export default Home
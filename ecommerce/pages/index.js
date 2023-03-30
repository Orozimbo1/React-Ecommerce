import React from 'react'

// Sanity
import { client } from '../lib/client'

// Componets
import { HeroBanner, FooterBanner, Product } from '@/components'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerData} />
      <div className='products-heading'>
        <h2>Best Seller Products</h2>
        <p>Speaker of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => product.name)}
      </div>

      <FooterBanner />
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
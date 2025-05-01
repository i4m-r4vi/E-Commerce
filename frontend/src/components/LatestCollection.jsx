import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts,setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0,10))
  }, [])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto md:text-base sm:text-sm text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, similique!</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-6'> 
        {
          latestProducts.map((items,i)=>{
            return(
              <ProductItems id={items._id} name={items.name} image={items.image} price={items.price} key={i}/>
            )
          })
        }

      </div>
      
    </div>
  )
}

export default LatestCollection
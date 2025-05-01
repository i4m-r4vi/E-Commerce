import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((items) => (items.bestseller))
        setBestSeller(bestProducts.slice(0, 5));
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl my-8'>
                <Title text1={'BEST'} text2={'SELLER'}></Title>
                <p className='w-3/4 m-auto md:text-base sm:text-sm text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, similique!</p>

            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-6'>
                {
                    bestSeller.map((items, i) => {
                        return (
                            <ProductItems id={items._id} name={items.name} image={items.image} price={items.price} key={i} />
                        )
                    })
                }

            </div>

        </div>
    )
}

export default BestSeller
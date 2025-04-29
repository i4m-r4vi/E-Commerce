import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col border border-gray-400 sm:flex-row'>
            <div className='flex sm:w-1/2 w-full justify-center items-center py-10 sm:py-0'>
                <div className='text-[#434343]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 bg-[#414141] md:w-11 h-[2px]'></p>
                        <p>Our Best Sellers</p>
                    </div>
                    <h1 className='prata-regular text-3xl leading-relaxed md:py-3 lg:text-5xl'>
                        Latest Arrivals
                    </h1>
                    <div className='flex items-center gap-2'>
                        <p>Shop Now</p>
                        <p className='w-8 bg-[#414141] md:w-11 h-[2px]'></p>
                    </div>
                </div>
            </div>
                <img src={assets.hero_img} alt="" className='w-full sm:w-1/2'/>
        </div>
    )
}

export default Hero
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div >
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' />
                    <p className='w-full md:w-1/2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur minus dolorum unde vero et esse tenetur magni. Cupiditate, harum?</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Get In Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 98765-43210</li>
                        <li>contact@forever.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright {year}@forever.com - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to={'/'}><img src={assets.logo} alt="" className='w-36' /></Link>
      <ul className='hidden md:flex gap-5 text-sm text-gray-700'>
        <NavLink className='flex flex-col gap-1 items-center' to='/'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col gap-1 items-center' to='/collection'>
          <p>Collections</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col gap-1 items-center' to='/about'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col gap-1 items-center' to='/contact'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
        <div className='group relative'>
          <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
          <div className="absolute right-0 pt-2  w-auto bg-transparent  hidden group-hover:block dropdown-menu">
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className="cursor-pointer hover:text-black">Profile</p>
              <p className="cursor-pointer hover:text-black">Settings</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className="relative">
          <img src={assets.cart_icon} alt="" className='w-5' />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 h-4 text-white bg-black rounded-full text-[10px] text-center flex items-center justify-center">
            10
          </p>
        </Link>
        <img src={assets.menu_icon} onClick={() => setVisible(true)} className='w-5 sm:hidden' />

      </div>

      <div className={`absolute overflow-hidden top-0 right-0 bottom-0 bg-white md:hidden ${visible ? 'w-full' : 'w-0'} transition-all `}>
        <div className='flex flex-col'>
          <div className='flex px-4 py-6 cursor-pointer' onClick={() => setVisible(false)}>
            <img src={assets.dropdown_icon} alt="" className='w-2 rotate-180 mr-3' />
            <p>Back</p>
          </div>

          <div className='gap-3 flex flex-col m-4'>
            <Link className='border-b' to='/' onClick={() => setVisible(false)}>
              <p>Home</p>
            </Link>
            <Link className='border-b' to='/collection' onClick={() => setVisible(false)}>
              <p>Collections</p>
            </Link>
            <Link className='border-b' to='/about' onClick={() => setVisible(false)}>
              <p>About</p>
            </Link>
            <Link className='border-b' to='/contact' onClick={() => setVisible(false)}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
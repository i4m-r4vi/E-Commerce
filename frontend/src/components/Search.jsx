import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const Search = () => {

    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
    
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection')&&showSearch){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])

    return showSearch && visible?(
        <div className='border-t border-b p-4 bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border rounded-full border-gray-400 px-5 py-2 md:w-1/2'>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' placeholder='Search' />
                <img src={assets.search_icon} alt="search_icon" className='w-4'/>
            </div>
            <img src={assets.cross_icon} alt="cross" className='inline w-3 cursor-pointer mx-4' onClick={()=>setShowSearch(false)}/>
        </div>
    ):null
}

export default Search
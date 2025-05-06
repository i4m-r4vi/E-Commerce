import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import ProductItems from '../components/ProductItems'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = ()=>{
    let productCopy = products.slice();
    if(category.length>0){
      productCopy = productCopy.filter(items => category.includes(items.category))
    }
    if(subCategory.length>0){
      productCopy = productCopy.filter(items => subCategory.includes(items.subCategory))
    }
    setFilterProducts(productCopy)  
  }

  const sortProduct = (e)=>{
    let sortedProduct = filterProducts.slice();
    let choice = e.target.value;
    switch (choice) {
      case 'low-high':
        setFilterProducts(sortedProduct.sort((a,b)=>a.price-b.price))
        break;
      case 'high-low':
        setFilterProducts(sortedProduct.sort((a,b)=>b.price-a.price))
        break;
      default:
        setFilterProducts(products);
        break;
    }
  }

  useEffect(() => {
    setFilterProducts(products)
  }, [])

  useEffect(()=>{
    applyFilter()
  },[category,subCategory])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p className='flex items-center  cursor-pointer my-2 gap-2 text-2xl'>
          FILTERS
          <img src={assets.dropdown_icon} alt='dropdown' className={`sm:hidden h-3 ${showFilter ? 'rotate-90 transition-all' : ''} `} onClick={() => setShowFilter(!showFilter)} />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />MEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />WOMEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}  />KIDS
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />TOPWEAR
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />BOTTOMWEAR
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />WINTERWEAR
            </p>
          </div>
        </div>
      </div>


      <div className='flex-1d'>
        <div className='flex justify-between  text-base sm:text-2xl  px-2'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Products Sort */}
          <select className='border-2 border-gray-200 text-sm px-2' onChange={sortProduct}>
            <option value="Relavent" >Sort by: Relavent</option>
            <option value="low-high">low-high</option>
            <option value="high-low">high-low</option>
          </select>
        </div>
        {/* {Products Div} */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-4 gap-y-6'>
          {
            filterProducts.map((items, i) =>
              <div className='mt-5' key={i}>
                <ProductItems id={items._id} name={items.name} image={items.image} price={items.price}  />
              </div>

            )
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
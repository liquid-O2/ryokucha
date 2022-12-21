'use client'

import { useState } from 'react'
import { Minus, Plus } from 'react-feather'
import Button from '../../../components/button'

const AddToCart = () => {
  const [noOfItems, setNoOfItems] = useState(1)
  return (
    <div className='flex gap-5 mt-8 flex-wrap w-full md:w-auto '>
      <div className='text-background flex justify-between w-full md:w-fit max-w-full  items-center px-4 py-1 border border-background/50 rounded-full'>
        <button
          disabled={noOfItems === 1}
          className=' disabled:opacity-30 min-h-[48px] min-w-[48px] flex justify-center items-center'
          onClick={() => setNoOfItems((prev) => prev - 1)}>
          <Minus size={20} />
        </button>
        <p className='w-full px-6 text-center text-lg font-bold leading-none'>{noOfItems}</p>
        <button
          className=' min-h-[48px] min-w-[48px] flex justify-center items-center'
          onClick={() => setNoOfItems((prev) => prev + 1)}>
          <Plus size={20} />
        </button>
      </div>
      <Button variant='secondary' className='w-full md:w-auto'>
        ADD TO CART
      </Button>
    </div>
  )
}

export default AddToCart

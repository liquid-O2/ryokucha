'use client'

import { useState, useContext } from 'react'
import { Minus, Plus } from 'react-feather'
import Button from '../../../components/button'
import { GlobalContext, Teas } from '../../../components/contextProvider'

const AddToCart = ({ image, name, price, id }: { image: string; name: string; price: number; id: string }) => {
  const [noOfItems, setNoOfItems] = useState(1)
  const { dispatch, cartDetails } = useContext(GlobalContext)

  const handleAddToCart = () => {
    let alreadyExist = false
    cartDetails.forEach((item: Teas) => {
      if (item.id === id) {
        alreadyExist = true
      }
    })
    if (!alreadyExist) {
      console.log('add')
      return dispatch({ type: 'addItem', name, price, id, image, quantity: noOfItems })
    } else {
      console.log('update')
      return dispatch({ type: 'updateQuantity', id, quantity: noOfItems })
    }
  }

  return (
    <div className='flex gap-5 mt-8 w-full flex-wrap '>
      <div className='text-background flex justify-between w-full md:w-fit max-w-full  items-center px-4 py-1 border border-background/50 rounded-full'>
        <button
          disabled={noOfItems === 1}
          className=' disabled:opacity-30 min-h-[48px] min-w-[48px] flex justify-center items-center'
          onClick={() => setNoOfItems((prev) => prev - 1)}>
          <Minus size={20} />
        </button>
        <p className='w-full px-6 text-center text-lg font-semibold leading-none'>{noOfItems}</p>
        <button
          className=' min-h-[48px] min-w-[48px] flex justify-center items-center'
          onClick={() => setNoOfItems((prev) => prev + 1)}>
          <Plus size={20} />
        </button>
      </div>
      <Button variant='secondary' className='w-full md:w-auto' onClick={() => handleAddToCart()}>
        ADD TO CART
      </Button>
    </div>
  )
}

export default AddToCart

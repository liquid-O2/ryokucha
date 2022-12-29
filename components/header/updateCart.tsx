'use client'

import { useState } from 'react'
import { Minus, Plus, Trash } from 'react-feather'

const UpdateCart = ({ quantity, id, dispatch }: { quantity: number; id: string; dispatch: any }) => {
  const [noOfItems, setNoOfItems] = useState(quantity)

  const handleUpdateCart = (type: string) => {
    switch (type) {
      case 'add':
        setNoOfItems((prev) => prev + 1)
        dispatch({ type: 'updateQuantity', id, quantity: noOfItems + 1, updateCart: true })
        return
      case 'substract':
        setNoOfItems((prev) => prev - 1)
        dispatch({ type: 'updateQuantity', id, quantity: noOfItems - 1, updateCart: true })
        return
      default:
        setNoOfItems(0)
        dispatch({ type: 'deleteItem', id })
        return
    }
  }

  return (
    <div className='flex gap-3 flex-wrap   w-full  '>
      <div className='text-primary bg-tertiary-light bg-opacity-[0.01] flex justify-between  md:w-fit max-w-full  items-center px-0 py-0 border border-primary/10 rounded-full'>
        <button
          disabled={noOfItems === 1}
          className=' disabled:opacity-30 min-h-[48px] min-w-[48px] flex justify-center items-center'
          onClick={() => handleUpdateCart('substract')}>
          <Minus size={16} />
        </button>
        <p className='w-full md:px-6 text-center text-sm font-semibold leading-none'>{noOfItems}</p>
        <button
          className=' min-h-[48px] min-w-[48px] flex justify-center items-center'
          onClick={() => handleUpdateCart('add')}>
          <Plus size={16} />
        </button>
      </div>
      <button
        className='w-12 h-12 bg-tertiary-light bg-opacity-[0.01] rounded-lg border border-primary-40 flex justify-center items-center'
        onClick={() => handleUpdateCart('delete')}>
        <Trash size={16} />
      </button>
    </div>
  )
}

export default UpdateCart

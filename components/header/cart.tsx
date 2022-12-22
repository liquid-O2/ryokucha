'use client'
import { LazyMotion, AnimatePresence, m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ShoppingCart, X } from 'react-feather'
import Image from 'next/image'
import Button from '../button'
import UpdateCart from './updateCart'

const Cart = ({ cartItemNo, dispatch, cartDetails }: { cartItemNo: number; dispatch: any; cartDetails: any }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    cartDetails.forEach((item: any) => {
      if (item.price) setTotalPrice((prev) => prev + item.price)
    })
  }, [cartDetails])

  const loadFeatures = () => import('../framerFeatures').then((res) => res.default)
  return (
    <div className='relative'>
      <div className='relative'>
        <button className=' w-12 h-12 flex justify-center items-center' onClick={() => setCartOpen(!cartOpen)}>
          <span className='sr-only'>Cart</span>
          <ShoppingCart size={20} />
        </button>
        <div className='flex justify-center items-center absolute top-[3px] right-0 rounded-full bg-primary m-auto text-center p-1 px-[5.5px] leading-none  text-[8px] text-neon'>
          {cartItemNo}
        </div>
      </div>
      <div className='absolute z-50 mt-4 top-full w-[calc(100vw-20px)] -right-[92px] md:-right-5 md:w-[600px] md:min-w-[300px] overflow-hidden'>
        <LazyMotion features={loadFeatures}>
          <AnimatePresence initial={false}>
            {cartOpen && (
              <m.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: '-100%', opacity: 0 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.3 }}
                className=' bg-background border border-primary/10 shadow-2xl h-full min-h-[calc(100vh-124px)] shadow-primary-dark/10 rounded-3xl m-2 flex flex-col px-6 py-6 gap-4'>
                <div className='flex justify-between items-center '>
                  <p className='text-2xl'>{`Cart(${cartItemNo})`}</p>
                  <button className='w-12 h-12 flex justify-center items-center' onClick={() => setCartOpen(false)}>
                    <X size={28} />
                  </button>
                </div>
                {/* content here */}
                <div className='h-full-w-full relative mt-4'>
                  {cartDetails.map((item: any) => {
                    const { id, price, name, image, quantity } = item
                    if (id)
                      return (
                        <div
                          key={id}
                          className='flex relative overflow-hidden justify-between items-center h-32  max-h-32'>
                          <div className='flex flex-col justify-center  h-full w-[70%]'>
                            <span className='text-neon-dark'>{`$${price}`}</span>
                            <p className='text-xl mb-2'>{name}</p>
                            <UpdateCart id={id} quantity={quantity} dispatch={dispatch} />
                          </div>
                          <div className='relative h-full w-[30%] rounded-2xl overflow-hidden flex justify-center items-center'>
                            <Image
                              src={image}
                              alt={name}
                              width={300}
                              height={128}
                              className='object-cover h-full w-full'
                            />
                          </div>
                        </div>
                      )
                  })}
                </div>

                <div className='flex flex-col mt-auto justify-self-end '>
                  <div className='flex justify-between items-center mb-4 px-1'>
                    <p>Subtotal:</p> <p className='text-lg font-bold'>{`$${totalPrice}`}</p>
                  </div>
                  <Button variant='secondary' className='w-full'>
                    CHECKOUT
                  </Button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  )
}

export default Cart
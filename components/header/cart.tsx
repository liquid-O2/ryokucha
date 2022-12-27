'use client'

import { LazyMotion, AnimatePresence, m } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Coffee, ShoppingCart, X } from 'react-feather'
import Image from 'next/image'
import Button from '../button'
import UpdateCart from './updateCart'
import getStripe from '../utils/getStripe'
import { CartDetails } from '../contextProvider'

const Cart = ({ dispatch, cartDetails }: { dispatch: any; cartDetails: CartDetails[] }) => {
  const [cartItemNo, setCartItemNo] = useState(cartDetails.length)
  const [cartOpen, setCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  const priceArray = useMemo(() => {
    return cartDetails.map((item: any) => item.price * item.quantity)
  }, [cartDetails])

  useEffect(() => {
    setCartItemNo(cartDetails.length)
  }, [cartDetails.length])

  useEffect(() => {
    priceArray.forEach((item: any) => {
      if (item) setTotalPrice((prev) => prev + item)
    })
    return () => {
      setTotalPrice(0)
    }
  }, [priceArray])

  //handle stripe checkout
  const handleCheckout = async () => {
    const stripe = await getStripe()
    const response: any = await fetch('/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartDetails),
    })
    if (response.statusCode === 500) return
    const data = await response.json()
    stripe.redirectToCheckout({ sessionId: data.id })
    setIsLoading(false)
  }

  const loadFeatures = () => import('../utils/framerFeatures').then((res) => res.default)

  return (
    <div className='relative '>
      <div className='relative'>
        <button className=' w-12 h-12 flex justify-center items-center' onClick={() => setCartOpen(!cartOpen)}>
          <span className='sr-only'>Cart</span>
          <ShoppingCart size={20} />
        </button>
        <div className='flex justify-center items-center absolute top-[3px] right-0 rounded-full bg-primary m-auto text-center p-1 px-[5.5px] leading-none  text-[8px] text-neon'>
          {cartItemNo}
        </div>
      </div>
      <div className='absolute text-primary z-50 mt-2 top-full w-[calc(100vw-20px)] max-h-[calc(100vh-112px)] md:max-h-[calc(100vh-212px)] -right-[92px] md:-right-5 md:w-[600px] md:min-w-[300px] overflow-hidden'>
        <LazyMotion features={loadFeatures}>
          <AnimatePresence initial={false}>
            {cartOpen && (
              <m.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: '-100%', opacity: 0 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4 }}
                className=' bg-background border border-primary/10 shadow-md h-full  shadow-primary-dark/10 rounded-3xl m-2 flex flex-col px-6 py-6 gap-4'>
                <div className='flex justify-between items-center '>
                  <p className='text-2xl'>{`Cart (${cartItemNo})`}</p>
                  <button className='w-12 h-12 flex justify-center items-center' onClick={() => setCartOpen(false)}>
                    <X size={28} />
                  </button>
                </div>
                <div
                  className={`w-full overflow-y-auto max-h-[calc(100vh-350px)]  md:max-h-[calc(100vh-500px)] relative mt-4 ${
                    cartDetails.length === 0 && 'justify-center items-center mt-auto'
                  }`}>
                  {cartDetails.length === 0 && (
                    <div className='flex flex-col justify-center items-center w-full h-full gap-6 text-center my-10'>
                      <span className=''>
                        <Coffee size={32} />
                      </span>
                      <p className='opacity-90 leading-snug font-normal text-lg px-6'>
                        Your cart is empty, add some items to your cart to see them here
                      </p>
                    </div>
                  )}
                  {cartDetails.map((item: any) => {
                    const { id, price, name, image, quantity } = item
                    if (id)
                      return (
                        <div
                          key={id}
                          className='flex relative overflow-hidden justify-between items-center h-32 mb-6 max-h-32'>
                          <div className='flex flex-col justify-center  h-full w-[70%]'>
                            <span className='text-neon-dark'>{`$${price}`}</span>
                            <p className='text-lg md:text-xl mb-2'>{name}</p>
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
                    <p>Subtotal:</p> <p className='text-lg font-bold'>{`$${totalPrice.toFixed(2)}`}</p>
                  </div>
                  <Button
                    variant='secondary'
                    className='w-full'
                    onClick={() => {
                      handleCheckout()
                      setIsLoading(true)
                    }}>
                    {isLoading ? 'LOADING...' : 'CHECKOUT'}
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

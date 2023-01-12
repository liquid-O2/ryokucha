'use client'

import { LazyMotion, AnimatePresence, m } from 'framer-motion'
import { Dispatch, useEffect, useMemo, useState } from 'react'
import { Coffee, ShoppingCart, X } from 'react-feather'
import Image from 'next/image'
import Button from '../button'
import UpdateCart from './updateCart'
import { CartDetails } from '../contextProvider'
import { AddItemAction, DeleteItemAction, UpdateQuantityAction } from '../utils/reducer'

type Cart = {
  dispatch: Dispatch<AddItemAction | DeleteItemAction | UpdateQuantityAction>
  cartDetails: CartDetails[]
}

const Cart = ({ dispatch, cartDetails }: Cart) => {
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
    const getStripe = (await import('../utils/getStripe')).default
    const stripe = await getStripe()
    const response: any = await fetch('/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartDetails),
    })
    if (response.statusCode === 500) return
    const data = await response.json()
    stripe!.redirectToCheckout({ sessionId: data.id })
    setIsLoading(false)
  }

  const loadFeatures = () => import('../utils/framerFeatures').then((res) => res.default)

  return (
    <div className='relative '>
      <div className='relative'>
        <button className=' flex h-12 w-12 items-center justify-center' onClick={() => setCartOpen(!cartOpen)}>
          <span className='sr-only'>Cart</span>
          <ShoppingCart size={20} />
        </button>
        <div className='absolute top-[3px] right-0 m-auto flex items-center justify-center rounded-full bg-primary p-1 px-[5.5px] text-center text-[8px]  leading-none text-neon'>
          {cartItemNo}
        </div>
      </div>
      <div className='absolute top-full -right-[55%] z-50 mt-2 max-h-[calc(100vh-112px)] w-[calc(100vw-20px)] overflow-hidden text-primary max-[766px]:-right-[130%] md:-right-5 md:max-h-[calc(100vh-212px)] md:w-[600px] md:min-w-[300px]'>
        <LazyMotion features={loadFeatures}>
          <AnimatePresence initial={false}>
            {cartOpen && (
              <m.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: '-100%', opacity: 0 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4 }}
                className=' m-2 flex h-full flex-col gap-4  rounded-3xl border border-primary/10 bg-background px-6 py-6 shadow-md shadow-primary-dark/10'
              >
                <div className='flex items-center justify-between '>
                  <p className='text-2xl'>{`Cart (${cartItemNo})`}</p>
                  <button className='flex h-12 w-12 items-center justify-center' onClick={() => setCartOpen(false)}>
                    <X size={28} />
                  </button>
                </div>
                <div
                  className={`relative mt-4 max-h-[calc(100vh-350px)]  w-full overflow-y-auto md:max-h-[calc(100vh-500px)] ${
                    cartDetails.length === 0 && 'mt-auto items-center justify-center'
                  }`}
                >
                  {cartDetails.length === 0 && (
                    <div className='my-10 flex h-full w-full flex-col items-center justify-center gap-4 text-center'>
                      <span className='opacity-60'>
                        <Coffee size={32} />
                      </span>
                      <p className='px-6 text-lg font-normal leading-snug opacity-90'>
                        Your cart is empty, add some items to your cart to see them here
                      </p>
                    </div>
                  )}
                  {cartDetails.map((item: any) => {
                    const { slug, price, name, image, quantity } = item

                    return (
                      <div
                        key={slug}
                        className='relative mb-6 flex h-32 max-h-32 items-center justify-between overflow-hidden'
                      >
                        <div className='flex h-full w-[70%]  flex-col justify-center'>
                          <span className='text-neon-dark'>{`$${price}`}</span>
                          <p className='mb-2 text-lg md:text-xl'>{name}</p>
                          <UpdateCart slug={slug} quantity={quantity} dispatch={dispatch} />
                        </div>
                        <div className='relative flex h-full w-[30%] items-center justify-center overflow-hidden rounded-2xl'>
                          <Image
                            src={image.asset.url}
                            placeholder='blur'
                            blurDataURL={image.asset.metadata.lqip}
                            alt={name}
                            width={300}
                            height={128}
                            className='h-full w-full object-cover'
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className='mt-auto flex flex-col justify-self-end '>
                  <div className='mb-4 flex items-center justify-between px-1'>
                    <p>Subtotal:</p> <p className='text-lg font-semibold'>{`$${totalPrice.toFixed(2)}`}</p>
                  </div>
                  <Button
                    variant='secondary'
                    className='w-full'
                    onClick={() => {
                      handleCheckout()
                      setIsLoading(true)
                    }}
                  >
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

'use client'

import { LazyMotion, m } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Heart } from 'react-feather'
import { GlobalContext } from './contextProvider'
import { base64BlurImage } from './utils/base64BlurredImages'

type CardProps = { img: string; price: number; title: string; attributes: Array<string>; id: string; className: string }

const Card = ({ img, price, title, attributes, id, className }: CardProps) => {
  const { userDetails, isLoggedIn, updateUser, router } = useContext(GlobalContext)
  const { likedTeas } = userDetails
  const [isLiked, setIsLiked] = useState(false)

  // prefetch product pages for faster routing
  router.prefetch(`/products/${id}`)

  // update liked state
  const toggleUpdateLiked = () => {
    setIsLiked((prevState) => !prevState)
    if (isLiked) {
      updateUser('delete', id, 'likedTeas')
    } else updateUser('add', id, 'likedTeas')
  }

  // checks if the card is previously liked by the user
  const liked = useCallback(() => {
    let isLiked = false
    likedTeas.forEach((tea) => {
      if (tea === id) {
        isLiked = true
      }
    })
    if (!isLoggedIn) isLiked = false
    return isLiked
  }, [likedTeas, id, isLoggedIn])

  useEffect(() => {
    setIsLiked(liked)
  }, [liked])

  // lazy load framer
  const loadFeatures = () => import('./utils/framerFeatures').then((res) => res.default)

  return (
    <>
      <LazyMotion features={loadFeatures}>
        <div className='relative w-full'>
          <button
            disabled={!isLoggedIn}
            className=' disabled:opacity-20 disabled:cursor-none w-12 h-12 flex justify-center items-center absolute z-20 top-[1%] right-[1%] text-primary cursor-pointer'
            onClick={(e) => {
              e.stopPropagation()
              toggleUpdateLiked()
            }}>
            <span className='sr-only'> like button </span>
            <Heart
              className={`w-6 h-6  ${isLiked ? 'fill-rose-500 stroke-rose-500' : ''} ${
                isLoggedIn ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </button>
          <m.div className={className} id={'card'} onTap={() => router.push(`/products/${id}`)}>
            <figure className=' w-full aspect-w-1 aspect-h-1 bg-[#E3E7DC] relative overflow-hidden rounded-3xl flex justify-center items-center  '>
              <Image
                src={img}
                alt={`${title} loose tea leaf`}
                blurDataURL={`data:image/png;base64,${base64BlurImage[id]}`}
                fill
                placeholder='blur'
                quality={90}
                className={`object-cover h-full w-full pointer-events-none `}
                sizes='
              (max-width: 1200px) 33vw,
              (max-width: 910px) 50vw,
              (min-width:1201px) 25vw
              100vw'
              />
            </figure>
            <div className='card-details flex flex-col justify-center items-center mt-4'>
              <p className=' text-xl min-[2000px]:text-2xl font-bold mb-2 leading-none md:leading-none'>{`$${price}`}</p>
              <p className='text-lg w-full text-center lg:text-xl mb-3 leading-none'>{title}</p>
              <div className='flex text-sm justify-between items-center gap-2 mb-4'>
                {attributes.map((attr, index) => (
                  <p key={index} className='px-4 py-1 max-w-fit rounded-full border border-primary/30 '>
                    {attr}
                  </p>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </LazyMotion>
    </>
  )
}

export default Card

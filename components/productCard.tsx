'use client'

import Image from 'next/image'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Heart } from 'react-feather'
import { GlobalContext } from './contextProvider'
import { base64BlurredImages } from './utils/base64BlurredImages'

type CardProps = {
  image: { asset: { url: string; metadata: { lqip: string } } }
  price: number
  name: string
  attributes: Array<string>
  slug: string
}

const Card = ({ image, price, name, attributes, slug }: CardProps) => {
  const { userDetails, isLoggedIn, updateUser, router } = useContext(GlobalContext)
  const { likedTeas } = userDetails
  const [isLiked, setIsLiked] = useState(false)

  // prefetch product pages for faster routing
  router.prefetch(`/products/${slug}`)

  // update liked state
  const toggleUpdateLiked = () => {
    setIsLiked((prevState) => !prevState)
    if (isLiked) {
      updateUser('delete', slug, 'likedTeas')
    } else updateUser('add', slug, 'likedTeas')
  }

  // checks if the card is previously liked by the user
  const liked = useCallback(() => {
    let isLiked = false
    likedTeas.forEach((tea) => {
      if (tea === slug) {
        isLiked = true
      }
    })
    if (!isLoggedIn) isLiked = false
    return isLiked
  }, [likedTeas, slug, isLoggedIn])

  useEffect(() => {
    setIsLiked(liked)
  }, [liked])

  return (
    <div className='flex flex-col gap-4 rounded-3xl border border-primary border-opacity-[15%] p-4'>
      <figure
        onClick={() => router.push(`/products/${slug}`)}
        className='aspect-w-1 aspect-h-1 relative flex w-full items-center justify-center overflow-hidden rounded-2xl'
      >
        <Image
          src={image.asset.url}
          alt={`${name} loose tea leaf`}
          blurDataURL={image.asset.metadata.lqip}
          fill
          placeholder='blur'
          quality={100}
          className={`h-full w-full cursor-pointer  object-cover transition-all duration-150 ease-in hover:scale-110 hover:opacity-90 `}
          sizes='
              (max-width: 1200px) 33vw,
              (max-width: 910px) 50vw,
              (min-width:1201px) 25vw
              100vw'
        />
      </figure>
      <div className='text'>
        <div className='relative flex items-center justify-between'>
          <p className='text-xl leading-tight'>{name}</p>
          <button
            disabled={!isLoggedIn}
            onClick={() => {
              toggleUpdateLiked()
            }}
            className=' relative  -mr-1 flex h-12 w-12 items-center justify-center transition-all duration-100 ease-in disabled:opacity-20'
          >
            <Heart
              size={22}
              className={` transition-all  duration-100 ease-in ${
                isLiked ? 'fill-rose-500 stroke-rose-500' : 'stroke-primary/70'
              } `}
            />
          </button>
        </div>
        <p className='text-xl font-semibold leading-none text-[#A0B137] '>{`$${price}`}</p>
      </div>
      <div className='mb-1 mt-1 flex items-center gap-2 text-sm'>
        {attributes.map((attr, index) => (
          <p key={index} className='max-w-fit rounded-full border border-primary/20 px-3 py-1 '>
            {attr}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Card

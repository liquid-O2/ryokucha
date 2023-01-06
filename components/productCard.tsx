'use client'

import Image from 'next/image'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Heart } from 'react-feather'
import { GlobalContext } from './contextProvider'
import { base64BlurredImages } from './utils/base64BlurredImages'

type CardProps = { img: string; price: number; name: string; attributes: Array<string>; id: string; className: string }

const Card = ({ img, price, name, attributes, id, className }: CardProps) => {
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

  return (
    <div className='flex flex-col gap-4 p-4 rounded-3xl border border-primary border-opacity-[15%]'>
      <figure
        onClick={() => router.push(`/products/${id}`)}
        className='w-full aspect-w-1 aspect-h-1 relative overflow-hidden rounded-2xl flex justify-center items-center'>
        <Image
          src={img}
          alt={`${name} loose tea leaf`}
          blurDataURL={`data:image/png;base64,${base64BlurredImages[id]}`}
          fill
          placeholder='blur'
          quality={100}
          className={`object-cover h-full w-full  cursor-pointer hover:opacity-90 hover:scale-110 transition-all ease-in duration-150 `}
          sizes='
              (max-width: 1200px) 33vw,
              (max-width: 910px) 50vw,
              (min-width:1201px) 25vw
              100vw'
        />
      </figure>
      <div className='text'>
        <div className='flex justify-between items-center relative'>
          <p className='text-xl leading-tight'>{name}</p>
          <button
            disabled={!isLoggedIn}
            onClick={() => {
              toggleUpdateLiked()
            }}
            className=' transition-all  ease-in duration-100 disabled:opacity-20 relative -mr-1 w-12 h-12 flex justify-center items-center'>
            <Heart
              size={22}
              className={` transition-all  ease-in duration-100 ${
                isLiked ? 'fill-rose-500 stroke-rose-500' : 'stroke-primary/70'
              } `}
            />
          </button>
        </div>
        <p className='font-semibold leading-none text-xl text-[#A0B137] '>{`$${price}`}</p>
      </div>
      <div className='flex text-sm items-center gap-2 mb-1 mt-1'>
        {attributes.map((attr, index) => (
          <p key={index} className='px-3 py-1 max-w-fit rounded-full border border-primary/20 '>
            {attr}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Card

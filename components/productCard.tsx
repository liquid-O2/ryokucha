'use client'

import Image from 'next/image'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Heart } from 'react-feather'
import { GlobalContext } from './contextProvider'

type CardProps = { img: string; price: string; title: string; attributes: Array<string>; id: string; className: string }

const Card = ({ img, price, title, attributes, id, className }: CardProps) => {
  const { userDetails, isLoggedIn, updateUser } = useContext(GlobalContext)
  const { likedTeas } = userDetails
  const [isLiked, setIsLiked] = useState(false)

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
    <>
      <div className={className} id={'card'}>
        <figure className='p-14 bg-tertiary relative rounded-3xl flex justify-center items-center  min-h-[367px]'>
          <Image
            src={img}
            alt={`${title} loose tea leaf`}
            width={300}
            height={308}
            className='object-cover h-full w-full pointer-events-none'
          />
          <button
            disabled={!isLoggedIn}
            className=' disabled:opacity-20 absolute top-4 right-4 text-primary'
            onClick={() => toggleUpdateLiked()}>
            <span className='sr-only'> like button </span>
            <Heart className={isLiked ? 'fill-rose-500 stroke-rose-500' : ''} />
          </button>
        </figure>
        <div className='card-details flex flex-col justify-center items-center mt-4'>
          <p className=' text-xl md:text-2xl font-bold mb-2 leading-none md:leading-none'>{price}</p>
          <p className='text-lg md:text-xl mb-3 leading-none'>{title}</p>
          <div className='flex justify-between items-center gap-2 mb-4'>
            {attributes.map((attr, index) => (
              <p key={index} className='px-4 py-1 max-w-fit rounded-full border border-primary border-opacity-50 '>
                {attr}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card

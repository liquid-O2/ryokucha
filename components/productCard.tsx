'use client'

import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { Heart } from 'react-feather'
import { db } from '../firebase/config'
import { GlobalContext } from './contextProvider'

type CardProps = { img: string; price: string; title: string; attributes: Array<string>; id: string; className: string }

const Card = ({ img, price, title, attributes, id, className }: CardProps) => {
  const { userDetails, isLoggedIn } = useContext(GlobalContext)
  const { uid, likedTeas } = userDetails
  const [isLiked, setIsLiked] = useState(false)
  const userRef = doc(db, 'users', `${uid}`)

  const toggleUpdateLikedTeas = () => {
    setIsLiked((prevState) => !prevState)
    if (isLiked) {
      updateDoc(userRef, {
        likedTeas: arrayRemove(id),
      })
    } else {
      updateDoc(userRef, {
        likedTeas: arrayUnion(id),
      })
    }
  }

  useEffect(() => {
    let liked = false
    likedTeas.map((teaID: string) => {
      if (teaID === id) {
        liked = true
      }
    })
    setIsLiked(liked)
    if (!isLoggedIn) setIsLiked(false)

    return () => {
      setIsLiked(false)
    }
  }, [isLoggedIn, likedTeas, id])

  return (
    <>
      <div className={className} id={'card'}>
        <figure className='p-14 bg-background relative rounded-3xl flex justify-center items-center min-h-[367px]'>
          <Image
            src={img}
            alt={`${title} loose tea leaf`}
            width={300}
            height={308}
            className='object-cover h-full w-full '
          />
          <button
            disabled={!isLoggedIn}
            className=' disabled:opacity-20 absolute top-4 right-4 text-primary'
            onClick={() => toggleUpdateLikedTeas()}>
            <span className='sr-only'> like button </span>
            <Heart className={isLiked ? 'fill-rose-600 stroke-rose-600' : ''} />
          </button>
        </figure>
        <div className='card-details flex flex-col justify-center items-center mt-4'>
          <p className=' text-xl md:text-2xl font-bold mb-2'>{price}</p>
          <p className='text-lg md:text-xl mb-4'>{title}</p>
          <div className='flex justify-between items-center gap-2 mb-4'>
            {attributes.map((attr, index) => (
              <p key={index} className='px-4 py-1 max-w-fit rounded-full border border-opacity-30 border-inherit '>
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

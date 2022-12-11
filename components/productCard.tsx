'use client'

import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { Heart } from 'react-feather'
import { db } from '../firebase/config'
import { AuthContext } from './contextProvider'

type CardProps = { img: string; price: string; title: string; attributes: Array<string>; id: string; className: string }

const Card = ({ img, price, title, attributes, id, className }: CardProps) => {
  const { userDetails } = useContext(AuthContext)
  const { uid } = userDetails
  const [isLiked, setIsLiked] = useState(false)
  const userRef = doc(db, 'users', `${uid}`)
  const toggleUpdateLikedTeas = async () => {
    if (isLiked) {
      await updateDoc(userRef, {
        likedTeas: arrayRemove(id),
      })
      setIsLiked((prevState) => !prevState)
      return
    } else {
      setIsLiked((prevState) => !prevState)
      await updateDoc(userRef, {
        likedTeas: arrayUnion(id),
      })
    }
  }

  useEffect(() => {
    if (!uid) return
    onSnapshot(userRef, (data) => {
      const userInfo = data.data()
      if (!userInfo) return
      userInfo.likedTeas.map((teaID: string) => {
        if (teaID === id) setIsLiked(true)
      })
    })
  })

  return (
    <>
      <div className={className}>
        <figure className='p-14 bg-green-50 w-full relative rounded-3xl flex justify-center items-center min-h-[367px]'>
          <Image src={img} alt='loose tea leaf' width={300} height={308} className='object-cover h-full w-full ' />
          <button className='absolute top-4 right-4' onClick={() => toggleUpdateLikedTeas()}>
            <Heart className={isLiked ? 'fill-red-600 stroke-red-600' : ''} />
          </button>
        </figure>
        <div className='card-details flex flex-col justify-center items-center mt-4'>
          <p className=' text-xl md:text-2xl font-bold mb-2'>{price}</p>
          <p className='text-lg md:text-xl mb-4'>{title}</p>
          <div className='flex justify-between items-center gap-2'>
            {attributes.map((attr, index) => (
              <p key={index} className='px-4 py-1 max-w-fit rounded-full border border-green-900 '>
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

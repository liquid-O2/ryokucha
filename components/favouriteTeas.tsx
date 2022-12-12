'use client'
import { collection, documentId, getDocs, query, where } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { db } from '../firebase/config'
import Carousel from './carousel'
import { AuthContext } from './contextProvider'
import { Teas } from './popularTeasCarousel'

const fetchTeas = async (id: string) => {
  const q = query(collection(db, 'teas'), where(documentId(), '==', `${id}`))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), Id: doc.id }))
  return teas as Teas[]
}

export const FavouriteTeas = () => {
  const { isLoggedIn, userDetails } = useContext(AuthContext)
  const { likedTeas } = userDetails
  const [favouriteTeas, setFavouriteTeas] = useState<Teas[]>([])

  useEffect(() => {
    likedTeas.map((teaId) => {
      if (teaId === '') return
      fetchTeas(teaId).then((fetchedTeas) => {
        setFavouriteTeas((prevState) => {
          return [...prevState, ...fetchedTeas]
        })
      })
    })
    return setFavouriteTeas([])
  }, [likedTeas])

  if (!isLoggedIn || likedTeas.length < 2) return <></>
  return (
    <>
      <div className='w-screen'>
        <Carousel teas={favouriteTeas} favourite />
      </div>
    </>
  )
}

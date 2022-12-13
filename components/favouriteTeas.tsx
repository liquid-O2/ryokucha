'use client'
import { collection, documentId, getDocs, query, where } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { db } from '../firebase/config'
import Carousel from './carousel'
import { Container } from './container'
import { AuthContext } from './contextProvider'
import { Teas } from './popularTeasCarousel'

const fetchTeas = async (id: string) => {
  const q = query(collection(db, 'teas'), where(documentId(), '==', `${id}`))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
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

    return () => {
      setFavouriteTeas([])
    }
  }, [likedTeas])

  if (!isLoggedIn) return <></>

  if (favouriteTeas.length === 0)
    return (
      <>
        <Container className='rounded-[3rem] mb-24'>
          <div className='flex'>
            <p className='text-4xl font-bold pt-8 mb-10 mr-autoitems-center justify-center '>Favourite Teas</p>
          </div>
          <div className='empty-card w-full h-[501px] text-green-1000 text-center rounded-2xl text-lg font-bold bg-green-50 flex justify-center items-center'>
            Add some teas to favourites to see them here
          </div>
        </Container>
      </>
    )

  return (
    <>
      <div className=' mb-24'>
        <Carousel teas={favouriteTeas} favourite />
      </div>
    </>
  )
}

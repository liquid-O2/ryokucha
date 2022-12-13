import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'

import { db } from '../firebase/config'
import Carousel from './carousel'
import { Container } from './container'
import { FavouriteTeas } from './favouriteTeas'

export type Teas = {
  name: string
  id: string
  attributes: Array<string>
  image: string
  price: string
  featured?: boolean
}

const fetchTeas = async () => {
  const q = query(collection(db, 'teas'), where('featured', '==', true))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return teas as Teas[]
}

export const PopularTeas = async () => {
  let teas = await fetchTeas()
  return (
    <>
      <div className='popularTeas w-full'>
        <Carousel teas={teas} />
      </div>
    </>
  )
}

import { Container } from './container'
import Card from './productCardCarousel'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../firebase/config'
import Carousel from './carousel'

export type Teas = {
  Name: string
  Id: string
  Attributes: Array<string>
  Image: string
  Price: string
}

const fetchTeas = async () => {
  const q = query(collection(db, 'teas'), limit(7))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), Id: doc.id }))
  return teas as Teas[]
}

export const PopularTeas = async () => {
  let teas = await fetchTeas()
  return (
    <>
      <div className='popularTeas w-screen'>
        <Carousel teas={teas} />
      </div>
    </>
  )
}

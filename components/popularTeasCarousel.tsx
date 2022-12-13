import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'
import Carousel from './carousel'

export type Teas = {
  name: string
  id: string
  attributes: Array<string>
  image: string
  price: string
}

const fetchTeas = async () => {
  const q = query(collection(db, 'teas'), where('featured', '==', true), limit(6))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return teas as Teas[]
}

export const PopularTeas = async () => {
  let teas = await fetchTeas()
  return (
    <>
      <div className='popularTeas w-screen mb-24'>
        <Carousel teas={teas} />
      </div>
    </>
  )
}

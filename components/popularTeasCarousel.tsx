import { collection, getDocs, limit, query, where } from 'firebase/firestore'
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
  const q = query(collection(db, 'teas'), where('Featured', '==', true), limit(6))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), Id: doc.id }))
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

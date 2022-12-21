import { query, collection, getDocs } from 'firebase/firestore'
import { cache } from 'react'
import { Container } from '../../components/container'
import { Teas } from '../../components/contextProvider'
import { db } from '../../firebase/config'
import DisplayStore from './displayStore'

const fetchTeas = cache(async () => {
  const q = query(collection(db, 'teas'))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return teas as Teas[]
})

const Store = async () => {
  const fetchedTeas = await fetchTeas()
  return (
    <Container className=' mt-56'>
      <h1 className='text-5xl text-center font-bold w-full'>Browse Our Products</h1>
      <DisplayStore fetchedTeas={fetchedTeas} />
    </Container>
  )
}

export default Store

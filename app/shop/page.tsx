import { query, collection, getDocs } from 'firebase/firestore'
import { cache } from 'react'
import { Container } from '../../components/container'
import { Teas } from '../../components/contextProvider'
import { db } from '../../firebase/config'
import DisplayStore from './displayStore'
import { sortArray } from '../../components/utils/sort'
import PageWrapper from '../../components/pageWrapper'

const fetchTeas = cache(async () => {
  const q = query(collection(db, 'teas'))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  const alphabeticalTeas = sortArray(teas, 'name', false)
  return alphabeticalTeas as Teas[]
})

const Store = async () => {
  const fetchedTeas = await fetchTeas()
  return (
    <PageWrapper>
      <Container className=' mt-56'>
        <h1 className='text-5xl px-8 text-center font-semibold w-full'>Browse Our Products</h1>
        <DisplayStore fetchedTeas={fetchedTeas} />
      </Container>
    </PageWrapper>
  )
}

export default Store

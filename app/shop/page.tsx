import { cache } from 'react'
import { Container } from '../../components/container'
import { Teas } from '../../components/contextProvider'
import DisplayStore from './displayStore'
import PageWrapper from '../../components/pageWrapper'
import { client } from '../../components/utils/sanity'

const fetchTeas = cache(async () => {
  const query = `*[_type == 'teas'] | order(name asc)
  {name,attributes,slug,price,description,
    image {
     asset->{
       url,
       metadata{lqip}
    }
  }}`
  const teas = await client.fetch(query)
  return teas as Teas[]
})

const Store = async () => {
  const fetchedTeas = await fetchTeas()
  return (
    <PageWrapper>
      <Container className=' pt-56'>
        <h1 className='w-full px-8 text-center text-5xl font-semibold'>Browse Our Products</h1>
        <DisplayStore fetchedTeas={fetchedTeas} />
      </Container>
    </PageWrapper>
  )
}

export default Store

import { Container } from './container'
import Card from './productCardCarousel'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../firebase/config'

type Teas = {
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
        <Container className='rounded-[3rem]'>
          <p className='text-4xl font-bold pt-8 mb-10 '>Popular Teas</p>
        </Container>
        <div className='carousel flex mb-10 gap-4 overflow-x-auto ml-auto snap-x snap-mandatory'>
          {teas.map((teas) => (
            <Card
              key={teas.Id}
              img={teas.Image}
              price={teas.Price}
              title={teas.Name}
              attributes={teas.Attributes}
              id={teas.Id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

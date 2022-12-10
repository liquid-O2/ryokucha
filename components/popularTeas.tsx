import { Container } from './container'
import Card from './productCard'
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
  const q = query(collection(db, 'teas'), limit(5))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), Id: doc.id }))
  return teas as Teas[]
}
// @ts-ignore
export const PopularTeas = async () => {
  let teas = await fetchTeas()
  return (
    <>
      <div className='popularTeas w-screen'>
        <Container className='rounded-[3rem] h-[800px]'>
          <p className='text-4xl font-bold pt-8 mb-10 '>Popular Teas</p>
          <div className='flex flex-wrap tea-card-wrapper items-center justify-center lg:justify-start gap-4'>
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
        </Container>
      </div>
    </>
  )
}

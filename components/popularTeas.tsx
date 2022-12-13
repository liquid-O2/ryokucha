'use client'
import { Container } from './container'
import Card from './productCard'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useState } from 'react'

type Teas = {
  name: string
  id: string
  attributes: Array<string>
  image: string
  price: string
  featured?: boolean
}

const fetchTeas = async () => {
  const teasReference = collection(db, 'teas')
  const q = query(teasReference, where('capital', '==', true))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return teas as Teas[]
}

export const PopularTeas = () => {
  const [teas, setTeas] = useState<Teas[] | null>(null)
  fetchTeas().then((teas) => setTeas(teas))
  return (
    <>
      <div className='popularTeas w-screen'>
        <Container className='rounded-[3rem] h-[800px]'>
          <p className='text-4xl font-bold pt-8 mb-10 '>Popular Teas</p>
          <div className='flex flex-wrap tea-card-wrapper items-center justify-center lg:justify-start gap-4'>
            {teas!.map((teas) => {
              if (teas.featured === true)
                return (
                  <Card
                    key={teas.id}
                    img={teas.image}
                    price={teas.price}
                    title={teas.name}
                    attributes={teas.attributes}
                    id={teas.id}
                    className={'card md:h-auto mb-9'}
                  />
                )
            })}
          </div>
        </Container>
      </div>
    </>
  )
}

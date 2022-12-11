'use client'
import { Container } from './container'
import Card from './productCard'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useState } from 'react'

type Teas = {
  Name: string
  Id: string
  Attributes: Array<string>
  Image: string
  Price: string
  Featured: boolean
}

const fetchTeas = async () => {
  const teasReference = collection(db, 'teas')
  const q = query(teasReference, where('capital', '==', true))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), Id: doc.id }))
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
              if (teas.Featured === true)
                return (
                  <Card
                    key={teas.Id}
                    img={teas.Image}
                    price={teas.Price}
                    title={teas.Name}
                    attributes={teas.Attributes}
                    id={teas.Id}
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

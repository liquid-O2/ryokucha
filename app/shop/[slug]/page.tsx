import { query, collection, getDocs, getDoc, where, documentId, doc } from 'firebase/firestore'
import Image from 'next/image'
import { cache } from 'react'
import { Container } from '../../../components/container'
import { Teas } from '../../../components/contextProvider'
import Section from '../../../components/section'
import { db } from '../../../firebase/config'
import AddToCart from './addToCart'

const fetchTeas = cache(async () => {
  const q = query(collection(db, 'teas'))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return teas as Teas[]
})

export async function generateStaticParams() {
  const teas = await fetchTeas()
  return teas.map((tea) => ({
    slug: tea.id,
  }))
}

interface ParamProps extends Teas {
  slug: string
}

const fetchSingleTea = cache(async (slug: string) => {
  const docRef = doc(db, 'teas', `${slug}`)
  const data = await getDoc(docRef)
  const tea = data.data()
  return tea as Teas
})

export default async function IndividualTea({ params }: { params: ParamProps }) {
  const { slug } = params
  const { fullImage, name, price, description } = await fetchSingleTea(slug)
  return (
    <Section>
      <Container>
        <div className='w-full overflow-hidden h-full flex flex-col lg:flex-row md:h-[80vh]  text-background bg-white rounded-3xl md:rounded-[3rem] '>
          <figure className='w-full relative md:rounded-[3rem] overflow-hidden '>
            <Image
              src={fullImage!}
              alt={name}
              width={1000}
              height={1000}
              className='relative object-cover h-full w-full '
              priority
            />
          </figure>
          <article className='relative px-10 h-full w-full flex flex-col justify-center md:px-20 bg-primary rounded-3xl md:rounded-[3rem] py-10 md:py-16'>
            <p className='text-2xl w-full text-neon font-bold'>{price}</p>
            <p className=' text-4xl w-full lg:text-5xl font-bold  mt-1'>
              {name}
              <span className='text-sm tracking-wider pl-2'>100g</span>
            </p>
            <p className='text-lg max-w-[50ch] mt-4'>{description}</p>
            <AddToCart />
          </article>
        </div>
      </Container>
    </Section>
  )
}

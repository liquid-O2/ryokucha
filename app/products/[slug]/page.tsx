import { query, collection, getDocs, getDoc, where, documentId, doc } from 'firebase/firestore'
import Image from 'next/image'
import { cache } from 'react'
import { Container } from '../../../components/container'
import { Teas } from '../../../components/contextProvider'
import PageWrapper from '../../../components/pageWrapper'
import Section from '../../../components/section'
import { base64BlurImage } from '../../../components/utils/base64BlurredImages'
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

const fetchSingleTea = async (slug: string) => {
  const docRef = doc(db, 'teas', `${slug}`)
  const data = await getDoc(docRef)
  const tea = data.data()
  return tea as Teas
}

export default async function IndividualTea({ params }: { params: ParamProps }) {
  const { slug } = params
  const { image, name, price, description } = await fetchSingleTea(slug)
  return (
    <PageWrapper>
      <Section>
        <Container>
          <div className='w-full overflow-hidden h-full flex flex-col lg:flex-row md:h-[80vh]  text-background bg-[#E3E7DC] rounded-3xl md:rounded-[3rem] '>
            <figure className='w-full max-[490px]:aspect-1  max-[766px]:aspect-w-1  max-[766px]:aspect-h-1 max-h-80 md:max-h-full h-full relative md:rounded-[3rem] overflow-hidden '>
              <Image
                src={image}
                alt={name}
                fill
                placeholder='blur'
                blurDataURL={`data:image/png;base64,${base64BlurImage[slug]}`}
                className=' object-cover h-full w-full'
                quality={100}
                priority
              />
            </figure>
            <article className='relative px-8 h-full w-full flex flex-col justify-center md:px-20 bg-primary rounded-3xl md:rounded-[3rem] py-10 md:py-16'>
              <p className='text-2xl w-full text-neon font-bold'>{`$${price}`}</p>
              <p className=' text-4xl w-full lg:text-5xl font-bold  mt-1'>
                {name}
                <span className='text-sm tracking-wider pl-2'>100g</span>
              </p>
              <p className='text-base md:text-lg md:max-w-[50ch] mt-4 opacity-90 leading-normal'>{description}</p>
              <AddToCart name={name} image={image} price={price} id={slug} />
            </article>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  )
}

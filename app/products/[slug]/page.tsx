import { query, collection, getDocs, getDoc, doc } from 'firebase/firestore'
import Image from 'next/image'
import { cache } from 'react'
import { Container } from '../../../components/container'
import { Teas } from '../../../components/contextProvider'
import PageWrapper from '../../../components/pageWrapper'
import Section from '../../../components/section'
import { base64BlurredImages } from '../../../components/utils/base64BlurredImages'
import { client } from '../../../components/utils/sanity'
import { db } from '../../../firebase/config'
import AddToCart from './addToCart'

const fetchTeas = cache(async () => {
  const query = `*[_type == 'teas' ]{name,attributes,slug,price,description,image{
    asset->{
      ...,
      metadata
    }
  }}`
  const teas = await client.fetch(query)
  return teas as Teas[]
})

export async function generateStaticParams() {
  const teas = await fetchTeas()
  return teas.map((tea) => ({
    slug: tea.slug.current,
  }))
}

interface ParamProps {
  slug: string
}

const fetchSingleTea = async (slug: string) => {
  const query = `*[_type == 'teas' && slug.current == '${slug}' ]{name,attributes,slug,price,description,image{
    asset->{
      ...,
      metadata
    }
  }}`
  const tea = await client.fetch(query)

  return { ...tea[0] } as Teas
}

export default async function IndividualTea({ params }: { params: ParamProps }) {
  const { slug } = params
  const tea = await fetchSingleTea(slug)

  return (
    <PageWrapper>
      <Section>
        <Container>
          <div className='w-full overflow-hidden h-full flex flex-col lg:flex-row md:h-[80vh]  text-background bg-[#E3E7DC] rounded-3xl md:rounded-[3rem] '>
            <figure className='w-full max-[490px]:aspect-1  max-[766px]:aspect-w-1  max-[766px]:aspect-h-1 max-h-80 md:max-h-full h-full relative md:rounded-[3rem] overflow-hidden '>
              <Image
                src={tea.image.asset.url}
                alt={tea.name}
                fill
                placeholder='blur'
                blurDataURL={tea.image.asset.metadata.lqip}
                className=' object-cover h-full w-full'
                quality={100}
                priority
              />
            </figure>
            <article className='relative px-8 h-full w-full flex flex-col justify-center md:px-20 bg-primary rounded-3xl md:rounded-[3rem] py-10 md:py-16'>
              <p className='text-2xl w-full text-neon font-semibold'>{`$${tea.price}`}</p>
              <p className=' text-4xl w-full lg:text-5xl font-semibold  mt-1'>
                {tea.name}
                <span className='text-sm tracking-wider pl-2'>100g</span>
              </p>
              <p className='text-base md:text-lg md:max-w-[50ch] mt-4 opacity-90 leading-normal'>{tea.description}</p>
              <AddToCart name={tea.name} image={tea.image} price={tea.price} slug={tea.slug.current} />
            </article>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  )
}

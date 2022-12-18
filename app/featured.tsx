'use client'
import { useContext, useMemo } from 'react'
import Button from '../components/button'
import Carousel from '../components/carouselFramer'
import { Container } from '../components/container'
import { GlobalContext } from '../components/contextProvider'
import Card from '../components/productCard'
import Section from '../components/section'

const Featured = () => {
  const { teas } = useContext(GlobalContext)
  const featuredTeas = useMemo(() => {
    return teas.filter((tea) => tea.featured === true)
  }, [teas])

  return (
    <Section>
      <Container>
        <div className='flex flex-col justify-between'>
          <p className='w-full text-center text-3xl md:text-4xl leading-tight font-bold mb-12'>
            Our recommendations for you
          </p>
          <Carousel>
            {featuredTeas.map((teas) => {
              const { id, image, price, name, attributes } = teas
              return (
                <Card
                  key={id}
                  img={image}
                  price={price}
                  title={name}
                  attributes={attributes}
                  id={id}
                  className={'w-[330px] min-w-[330px] md:w-[360px] md:min-w-[360px] mr-3 md:mr-4'}
                />
              )
            })}
          </Carousel>
          <Button variant='secondary' className='mt-12 px-10 md:mt-20 w-[80%] md:w-auto'>
            BROWSE MORE TEAS
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default Featured

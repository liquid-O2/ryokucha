'use client'
import { useContext } from 'react'
import Button from '../components/button'
import Carousel from '../components/carouselFramer'
import { Container } from '../components/container'
import { GlobalContext } from '../components/contextProvider'
import Card from '../components/productCardCopy'
import Section from '../components/section'

const Featured = () => {
  const { teas } = useContext(GlobalContext)

  return (
    <Section>
      <Container>
        <div className='flex flex-col justify-between'>
          <p className='text-3xl md:text-4xl leading-tight font-bold mb-8'>Featured Teas</p>
          <Carousel>
            {teas.map((teas) => {
              const { id, image, price, name, attributes } = teas
              return (
                <Card
                  key={id}
                  img={image}
                  price={price}
                  title={name}
                  attributes={attributes}
                  id={id}
                  className={'w-[300px] min-w-[300px] md:w-[360px] md:min-w-[360px] mr-4'}
                />
              )
            })}
          </Carousel>
          <Button variant='secondary' className='mt-12 md:mt-20 w-[80%] md:w-auto'>
            BROWSE MORE TEAS
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default Featured

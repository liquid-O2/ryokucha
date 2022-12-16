'use client'
import { useContext } from 'react'
import Button from '../components/button'
import Carousel from '../components/carouselFramer'
import { Container } from '../components/container'
import { AuthContext } from '../components/contextProvider'
import Card from '../components/productCardCopy'
import Section from '../components/section'

const Featured = () => {
  // const { teas } = useContext(AuthContext)

  const teas = [
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
    {
      name: 'a',
      price: '$99',
      id: 'sfsefsd',
      attributes: ['smooth', 'sweet'],
      image:
        'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
    },
  ]
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
          <Button type='secondary' className='mt-16'>
            BROWSE MORE TEAS
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default Featured

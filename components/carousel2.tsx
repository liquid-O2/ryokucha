'use client'
import { Teas } from './popularTeasCarousel'
import Carousel from 'nuka-carousel/lib/carousel'
import Card from './productCardCopy'

const TeaCarousel = ({ teas }: { teas: Teas[] | undefined }) => {
  return (
    <>
      <Carousel withoutControls>
        {teas!.map((teas) => {
          const { id, image, price, name, attributes } = teas
          return (
            <>
              <Card
                img={image}
                price={price}
                title={name}
                attributes={attributes}
                id={id}
                className={'max-w-[360px]'}
              />
            </>
          )
        })}
      </Carousel>
    </>
  )
}

export default TeaCarousel

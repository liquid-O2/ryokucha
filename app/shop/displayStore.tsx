'use client'
import { useState } from 'react'
import { Search } from 'react-feather'
import { Container } from '../../components/container'
import { Teas } from '../../components/contextProvider'
import Input from '../../components/input'
import Card from '../../components/productCard'
import SortBtns from './sortingBtns'

const DisplayStore = ({ fetchedTeas }: { fetchedTeas: Teas[] }) => {
  const [teas, setTeas] = useState(fetchedTeas)
  return (
    <Container className='flex flex-col justify-center items-center'>
      <div className='input-wrapper w-[60%] mt-8 mb-16'>
        <Input
          type='text'
          placeholder='Search for your favourite tea'
          className='bg-tertiary-light pl-[56px] bg-opacity-[0.01] h-14 rounded-full border-primary/10 w-full'
        />
        <div className='icon absolute left-[1.5rem] top-[1.2rem] pointer-events-none'>
          <Search size={20} className={`stroke-primary/70`} />
        </div>
      </div>

      <div className='relative '>
        <SortBtns setTeas={setTeas} />
        <div className='grid pb-32 max-[517px]:grid-cols-1  max-[1200px]:grid-cols-3 max-[700px]:grid-cols-2 pt-8 gap-x-4 lg:gap-x-6 gap-y-14  grid-cols-4'>
          {teas.map((tea) => {
            const { name, image, price, attributes, id } = tea
            return (
              <Card
                key={name}
                img={image}
                title={name}
                price={price}
                id={id}
                attributes={attributes}
                className={'rounded-2xl overflow-hidden cursor-pointer'}
              />
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default DisplayStore

'use client'
import { useState } from 'react'
import { Search } from 'react-feather'
import { Container } from '../../components/container'
import { Teas } from '../../components/contextProvider'
import Card from '../../components/productCard'
import SortBtns from './sortingBtns'

const DisplayStore = ({ fetchedTeas }: { fetchedTeas: Teas[] }) => {
  const [teas, setTeas] = useState<Teas[]>(fetchedTeas)
  const [searchResult, setSearchResult] = useState<Teas[]>()

  const handleSearch = async (value: string) => {
    const Fuse = (await import('fuse.js')).default
    const options = {
      keys: ['name'],
    }
    const fuse = new Fuse(teas, options)
    const result = fuse.search(value)
    const searchedTeas = result.map((res) => {
      return res.item
    })
    setSearchResult(searchedTeas)
  }

  return (
    <Container className='flex flex-col justify-center items-center'>
      <div className='input-wrapper max-[1100px]:w-[99%] w-[70%]  mt-8 mb-16'>
        <input
          onChange={(e) => handleSearch(e.target.value)}
          type='text'
          placeholder='Search for your favourite tea'
          className='pr-4  py-3 border text-primary bg-tertiary-light pl-[56px] bg-opacity-[0.01] h-14 rounded-full border-primary/10 w-full'
        />
        <div className='icon absolute left-[1.5rem] top-[1.2rem] pointer-events-none'>
          <Search size={20} className={`stroke-primary/70`} />
        </div>
      </div>

      <div className='relative w-full'>
        <SortBtns setTeas={setTeas} />
        <div className='grid pb-32 max-[612px]:grid-cols-1  max-[1200px]:grid-cols-3 max-[910px]:grid-cols-2 pt-8 gap-x-4 lg:gap-x-6 gap-y-14  grid-cols-4'>
          {(!searchResult || searchResult.length === 0) &&
            teas.map((tea: Teas) => {
              const { name, image, price, attributes, slug } = tea
              return (
                <Card
                  key={name}
                  image={image}
                  name={name}
                  price={price}
                  slug={slug.current}
                  attributes={attributes}
                  className={'rounded-2xl overflow-hidden cursor-pointer'}
                />
              )
            })}
          {searchResult &&
            searchResult.map((tea: Teas) => {
              const { name, image, price, attributes, slug } = tea
              return (
                <Card
                  key={name}
                  image={image}
                  name={name}
                  price={price}
                  slug={slug.current}
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

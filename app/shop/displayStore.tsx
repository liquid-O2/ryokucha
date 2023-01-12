'use client'
import { useState } from 'react'
import { Search } from 'react-feather'
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
    <section className='flex flex-col items-center justify-center'>
      <div className='input-wrapper mt-8 mb-16  w-[70%] max-[1100px]:w-[99%]'>
        <input
          onChange={(e) => handleSearch(e.target.value)}
          type='text'
          placeholder='Search for your favourite tea'
          className='h-14  w-full rounded-full border border-primary/10 bg-tertiary-light bg-opacity-[0.01] py-3 pr-4 pl-[56px] text-primary'
        />
        <div className='icon pointer-events-none absolute left-[1.5rem] top-[1.2rem]'>
          <Search size={20} className={`stroke-primary/70`} />
        </div>
      </div>

      <div className='relative w-full'>
        <SortBtns setTeas={setTeas} />
        <div className='grid grid-cols-4 gap-x-4  gap-y-12 pb-32 pt-8 max-[1200px]:grid-cols-3 max-[910px]:grid-cols-2 max-[612px]:grid-cols-1  lg:gap-x-6'>
          {(!searchResult || searchResult.length === 0) &&
            teas.map((tea: Teas) => {
              const { name, image, price, attributes, slug } = tea
              return (
                <Card key={name} image={image} name={name} price={price} slug={slug.current} attributes={attributes} />
              )
            })}
          {searchResult &&
            searchResult.map((tea: Teas) => {
              const { name, image, price, attributes, slug } = tea
              return (
                <Card key={name} image={image} name={name} price={price} slug={slug.current} attributes={attributes} />
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default DisplayStore
